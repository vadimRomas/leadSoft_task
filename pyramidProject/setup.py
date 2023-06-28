from setuptools import setup, find_packages

setup(
    name='LeadSoft',
    version='1.0.0',
    description='Your project description',
    packages=find_packages(),
    install_requires=[
        'pyramid',
        'waitress',
        'gevent',
        'gevent-websocket',
    ],
    entry_points={
        'paste.app_factory': [
            'main = LeadSoft:main'
        ],
    },
)