import json


class Users:
    file_name = 'LeadSoft/data/users.json'

    def __init__(self, end_user_id, web_page_url):
        self.end_user_id = end_user_id
        self.web_page_url = web_page_url

    def add_user(self):
        users = self.get_all_users()
        new_user = {
            'id': self.end_user_id,
            'web_page_url': self.web_page_url
        }

        search_user = filter(lambda user: (user['id'] == self.end_user_id), users)

        if list(search_user):
            users = [new_user if user['id'] == self.end_user_id else user for user in users]
        else:
            users.insert(0, new_user)

        file = open(self.file_name, 'w')
        file.write(json.dumps(users))
        file.close()

    @classmethod
    def get_all_users(cls):
        file = open(cls.file_name, 'r')
        users = json.loads(file.read())
        file.close()
        return users
