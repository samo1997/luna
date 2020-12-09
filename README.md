# Screenshots
![alt text](./frontend/src/assets/screenshots/page_home.png "Home Page")

![alt text](./frontend/src/assets/screenshots/pages_animated.gif "Search Page Animated")

# Purpose
Project Luna is the result of a one week sprint of web development.
The app's purpose is providing a platform for uploading restaurants around the world.
With features like adding reviews, comments connected to unique profiles - luna comes to live.

# Setup Guide 

<strong>Project and Frontend</strong>

1. Install node: https://nodejs.org/en/download/
2. Update npm: <code>$ sudo npm install -g npm@latest</code>
3. Install Docker: https://docs.docker.com/get-docker/
4. Clone the repository: <code>$ git clone git@gitlab.propulsion-home.ch:full-stack/batch-13-aug-2020/group-projects/scorpio/project-luna.git</code>
5. Install all dependencies: <code>$ cd frontend/ $ npm i</code> 
6. Start the frontend React app: <code>$ cd frontend/ $ npm start</code>
7. Test if the React app is running correctly by accessing "http://localhost:3000/"

<strong>Backend and Docker</strong>

8. Build the docker image: <code>$ docker build -t registry.gitlab.propulsion-home.ch/full-stack/batch-13-aug-2020/group-projects/scorpio/project-luna .</code>
9. Setup PyCharm with a remote interpreter for the docker container:
* PyCharm settings > Build, Execution, Deployment > Docker > virtual path "/backend" and local path "C:\Users\MyUser\PycharmProjects\project-luna\backend"
* PyCharm settings > Project > Add Interpreter > Docker Compose > Service: "backend" + Python interpreter path "/opt/conda/envs/backend/bin/python"
* Make PyCharm Run/Debug configurations > 
    * Script path: "C:\Users\MyUser\PycharmProjects\project-luna\backend\manage.py"
    * Command: <code>runserver 0.0.0.0:8000</code>
    * Path mapping: "C:/Users/alex_/PycharmProjects/project-luna/backend=/backend"
* Make PyCharm Run/Debug configurations > Same as above with command <code>makemigrations</code>
* Make PyCharm Run/Debug configurations > Same as above with command <code>migrate</code>
10. Test if the server is running correctly by accessing "http://localhost:8000/admin/"

# Endpoints

<strong>Registration</strong>

<code>/api/registration/</code> POST: Register new user by asking for email (a validation code will be send to given email).

<code>/api/registration/validate/</code> POST: Validate the creation of new user with the code sent by email.

<strong>Auth</strong>

<code>/api/auth/token/</code> POST: Get a new JWT by passing username and password.

<code>/api/auth/token/refresh/</code> POST: Get a new JWT by passing an old still valid JWT.

<code>/api/auth/token/verify/</code> POST: Verify a token by passing the token in the body.

<code>/api/auth/password-reset/</code> POST: Reset users password by sending a validation code in a email.

<code>/api/auth/password-reset/validate/</code> POST: Validate password reset token and set new password for the user.

<strong>Search</strong>

<code>/api/search/</code> GET: Search for ‘restaurants’, ‘reviews’ or ‘users’. {type: ‘restaurants’, ‘search_string’: ‘Pub’}

<strong>Home</strong>

<code>/api/home/</code> GET: Get a list of the four best rated restaurants for the home screen.

<strong>Restaurant</strong>

<code>/api/restaurants/</code> GET: Get the list of all the restaurant.

<code>/api/restaurants/new/</code> POST: Create a new restaurant.

<code>/api/restaurants/category/<int:category_id>/</code> GET: Get the all the restaurants by category.

<code>/api/restaurants/user/<int:user_id>/</code> GET: Get the all the restaurants created by a specific user in chronological order.

<code>/api/restaurants/<int:id>/</code> GET: Get the details of a restaurant by providing the id of the restaurant.

<code>/api/restaurants/<int:id>/</code> PATCH: Update a restaurant by id (only by owner or restaurant admin).

<code>/api/restaurants/<int:id>/</code> DELETE: Delete a restaurant by id (only by owner or restaurant admin).

<strong>Reviews</strong>

<code>/api/reviews/new/<int:restaurant_id>/</code> POST: Create new review for a restaurant.

<code>/api/reviews/restaurant/<int:restaurant_id>/</code> GET: Get the list of the reviews for a single restaurant.

<code>/api/reviews/user/<int:user_id>/</code> GET: Get the list of the reviews by a single user.

<code>/api/reviews/<int:review_id>/</code> GET: Get a specific review by ID and display all the information.

<code>/api/reviews/<int:review_id>/</code> PATCH: Update a specific review (only by owner).

<code>/api/reviews/<int:review_id>/</code> DELETE: Delete a specific review (only by owner).

<code>/api/reviews/like/<int:review_id>/</code> POST: Like a review.

<code>/api/reviews/like/<int:review_id>/</code> DELETE: Remove like from the review.

<code>/api/reviews/likes/</code> GET: Get the list of the reviews the current user liked.

<code>/api/reviews/comments/</code> GET: Get the list of the reviews the current user commented.

<strong>Comments</strong>

<code>/api/review/comment/<int:user_id>/</code> GET: Get all the comments from a single user.

<code>/api/review/comment/new/<int:review_id>/</code> POST: Comment on the review.

<code>/api/review/comment/<int:comment_id>/</code> DELETE: Delete the comment on the review.

<strong>Categories</strong>

<code>/api/category/list/</code> GET: Get the list of all the categories.

<strong>Users</strong>

<code>/api/me/</code> GET: Get the user profile.

<code>/api/me/</code> PATCH: Update the user profile.

<code>/api/users/list/</code> GET: Get all users.

<code>/api/users/?search=<str:search_string>/</code> GET: Search for a user.

<code>/api/users/<int:user_id>/</code> GET: get a specific user profile.
