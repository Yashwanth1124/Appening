# Blog Management System

## Project Description

This project is a Blog Management System with user authentication, role-based access control, and comprehensive blog management functionalities. It allows users to sign up, log in, verify their email addresses, and manage blog posts and comments based on their roles (Admin, Editor, User).

## Live URL

Your application is deployed at the following URL:

https://appening-1.onrender.com

You can use this URL to access and test your API endpoints.

### Setup and Installation

#### 1. Clone the Repository
   
First, clone the repository to your local machine:

git clone https://github.com/Yashwanth1124/Appening.git

cd Appening

#### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

npm install

#### 3. Configure Environment Variables

Create a .env file in the root directory and add the following environment variables:

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_HOST=your_email_host

EMAIL_PORT=your_email_port

EMAIL_USER=your_email_user

EMAIL_PASS=your_email_password

NODE_ENV=production

Replace the placeholder values with your actual MongoDB connection string, JWT secret, email service credentials, etc.

#### 4. Start the Server

To start the server, run the following command:

npm start

This will start the server on the port specified in your environment variables (default is 5000).

#### Using the Render Live URL

Your application is deployed at https://appening-1.onrender.com.

You can use this URL to access your API endpoints directly.

Testing the Endpoints

##### 1. User Registration

Method: POST URL: https://appening-1.onrender.com/api/auth/register

Body: (Select raw and JSON (application/json))

json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "yourpassword",
  "role": "User"
}

This endpoint registers a new user.

##### 2. User Login

Method: POST URL: https://appening-1.onrender.com/api/auth/login

Body: (Select raw and JSON (application/json))

json

{
  "email": "johndoe@example.com",
  "password": "yourpassword"
}

This endpoint logs in the user and returns a JWT token.

##### 3. Create Blog (Admin)

Method: POST URL: https://appening-1.onrender.com/api/blogs

Headers:

Authorization: Bearer <your-token>

Body: (Select raw and JSON (application/json))

json

{
  "title": "My First Blog",
  "content": "This is the content of my first blog."
}

This endpoint creates a new blog post.

##### 4. Get All Blogs

Method: GET URL: https://appening-1.onrender.com/api/blogs

This endpoint retrieves all blog posts.

##### 5. Update Blog (Editor/Admin)

Method: PUT URL: https://appening-1.onrender.com/api/blogs/<blogId>

Headers:

Authorization: Bearer <your-token>

Body: (Select raw and JSON (application/json))

json

{
  "title": "Updated Blog Title",
  "content": "Updated blog content."
}

This endpoint updates an existing blog post.

##### 6. Delete Blog (Admin)

Method: DELETE URL: https://appening-1.onrender.com/api/blogs/<blogId>

Headers:

Authorization: Bearer <your-token>

This endpoint deletes a blog post.

##### 7. Add Comment (User)

Method: POST URL: https://appening-1.onrender.com/api/comments/<blogId>

Headers:

Authorization: Bearer <your-token>

Body: (Select raw and JSON (application/json))

json

{
  "content": "This is a comment on the blog."
}

This endpoint adds a comment to a blog post.

##### 8. Delete Comment (User)
Method: DELETE URL: https://appening-1.onrender.com/api/comments/<commentId>

Headers:

Authorization: Bearer <your-token>

This endpoint deletes a comment by the user.

#### Testing Instructions

Install Postman: Download and install Postman from here.

Create a New Request: In Postman, click the "New" button and select "Request".

Set Up the Request:

Enter the Request URL: Use the endpoints provided above.

Set the HTTP Method: Select the appropriate method (GET, POST, PUT, DELETE).

Add Headers: For protected endpoints, add the Authorization header with the token.

Set the Body: For endpoints requiring a body, select raw and JSON

(application/json) and enter the request body.

Send the Request: Click "Send" and review the response.

Check the Response: Ensure the responses match the expected results, including status codes and response bodies.



