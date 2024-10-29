from locust import HttpUser, task, between


class WebsiteUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def get_users(self):
        self.client.get("/users")

    @task
    def get_user_by_id(self):
        user_id = 1
        self.client.get(f"/users/{user_id}")
