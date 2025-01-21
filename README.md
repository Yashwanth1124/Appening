# Blog Management System

## Project Description
This project is a Blog Management System with user authentication, role-based access control, and comprehensive blog management functionalities. It allows users to sign up, log in, verify their email addresses, and manage blog posts and comments based on their roles (Admin, Editor, User). 

## Setup and Installation

### 1. Clone the Repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/Yashwanth1124/Appening.git
cd Appening
2. Install Dependencies
Navigate to the project directory and install the required dependencies:

bash
npm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following environment variables:

dotenv
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
NODE_ENV=production
Replace the placeholder values with your actual MongoDB connection string, JWT secret, email service credentials, etc.

4. Start the Server
To start the server, run the following command:

bash
npm start
This will start the server on the port specified in your environment variables (default is 5000).

Using the Render Live URL
Your application is deployed at the following URL:

https://appening-1.onrender.com
You can use this URL to access your API endpoints.

Testing the Endpoints
1. User Registration
Method: POST URL: https://appening-1.onrender.com/api/auth/register Body:

json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "yourpassword",
  "role": "User"
}
This endpoint registers a new user.

2. User Login
Method: POST URL: https://appening-1.onrender.com/api/auth/login Body:

json
{
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
This endpoint logs in the user and returns a JWT token.

3. Create Blog (Admin)
Method: POST URL: https://appening-1.onrender.com/api/blogs Headers:

http
Authorization: Bearer <your-token>
Body:

json
{
  "title": "My First Blog",
  "content": "This is the content of my first blog."
}
This endpoint creates a new blog post.

4. Get All Blogs
Method: GET URL: https://appening-1.onrender.com/api/blogs This endpoint retrieves all blog posts.

5. Update Blog (Editor/Admin)
Method: PUT URL: https://appening-1.onrender.com/api/blogs/<blogId> Headers:

http
Authorization: Bearer <your-token>
Body:

json
{
  "title": "Updated Blog Title",
  "content": "Updated blog content."
}
This endpoint updates an existing blog post.

6. Delete Blog (Admin)
Method: DELETE URL: https://appening-1.onrender.com/api/blogs/<blogId> Headers:

http
Authorization: Bearer <your-token>
This endpoint deletes a blog post.

7. Add Comment (User)
Method: POST URL: https://appening-1.onrender.com/api/comments/<blogId> Headers:

http
Authorization: Bearer <your-token>
Body:

json
{
  "content": "This is a comment on the blog."
}
This endpoint adds a comment to a blog post.

8. Delete Comment (User)
Method: DELETE URL: https://appening-1.onrender.com/api/comments/<commentId> Headers:

http
Authorization: Bearer <your-token>
This endpoint deletes a comment by the user.

Notes
Replace <your-token>, <blogId>, and <commentId> with the actual values.

Use Postman or another API testing tool to test these endpoints.

Ensure that you have the necessary environment variables set in your local setup.

By following these steps, you'll be able to set up, deploy, and test your Blog Management System effectively.
