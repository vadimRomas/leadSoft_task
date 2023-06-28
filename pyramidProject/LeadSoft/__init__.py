from pyramid.response import Response
from waitress import serve
from pyramid.config import Configurator
import socketio

from LeadSoft.models import Users

async_mode = None

sio = socketio.Server(logger=True, async_mode=async_mode, cors_allowed_origins='*')


def background_thread():
    """Example of how to send server generated events to clients."""
    count = 0
    while True:
        sio.sleep(10)
        count += 1
        sio.emit('my_response', {'data': 'Server generated event'})


def index(request):
    global thread
    if thread is None:
        thread = sio.start_background_task(background_thread)
    return Response('hello')


def where_user(request):
    if request.method == 'POST':
        data = request.json_body

        Users(data['endUserId'], data['webPageURL']).add_user()
        user_data()

    return Response()


@sio.event()
def user_data():
    users = Users.get_all_users()
    sio.emit('user_data', users)


@sio.event
def connect(sid, environ):
    user_data()
    sio.emit('my_response', {'data': 'Connected', 'count': 0}, room=sid)


@sio.event
def disconnect(sid):
    print('Client disconnected')


with Configurator() as config:
    config.add_route('where_user', '/where')
    config.add_view(where_user, route_name='where_user')

    config.add_route('index', '/')
    config.add_view(index, route_name='index')
    wsgi_app = config.make_wsgi_app()

app = socketio.WSGIApp(sio, wsgi_app)
thread = None


def main(conf, **settings):
    if sio.async_mode == 'threading':
        # deploy with Waitress
        serve(app, host='0.0.0.0', port=6543)
    elif sio.async_mode == 'eventlet':
        # deploy with eventlet
        import eventlet
        import eventlet.wsgi
        eventlet.wsgi.server(eventlet.listen(('', 5000)), app)
    elif sio.async_mode == 'gevent':
        # deploy with gevent
        from gevent import pywsgi
        try:
            from geventwebsocket.handler import WebSocketHandler
            websocket = True
        except ImportError:
            websocket = False
        if websocket:
            pywsgi.WSGIServer(('', 5000), app,
                              handler_class=WebSocketHandler).serve_forever()
        else:
            pywsgi.WSGIServer(('', 5000), app).serve_forever()
    elif sio.async_mode == 'gevent_uwsgi':
        print('Start the application through the uwsgi server. Example:')
        print('uwsgi --http :5000 --gevent 1000 --http-websockets --master '
              '--wsgi-file pyramid_app.py --callable app')
    else:
        print('Unknown async_mode: ' + sio.async_mode)
