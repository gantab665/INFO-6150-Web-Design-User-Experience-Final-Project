Step 1: Install Postman
If you haven't already, download and install Postman from the official website: https://www.postman.com/downloads/

Step 2: Start your Node.js Server
Ensure your Node.js server is up and running. Make sure your server is listening on the specified port (e.g., port 3000).

Step 3: Test the APIs in Postman

Here are the steps to test each of your API endpoints along with example payloads:

Create a User (POST: /user/create)

Open Postman.
Set the request type to POST.
Enter the URL: http://localhost:3000/user/create (or your server's URL).
Go to the Body tab.
Select raw and choose JSON (application/json) as the format.
Enter the payload:
json
Copy code
{
  "fullName": "John Doe",
  "email": "johndoe@example.com",
  "password": "StrongPass123"
}
Click the Send button.
You should receive a response indicating the user was created or any validation errors.
Update a User (PUT: /user/edit)

Open Postman.
Set the request type to PUT.
Enter the URL: http://localhost:3000/user/edit?email=johndoe@example.com (replace with the user's email you want to update).
Go to the Body tab.
Select raw and choose JSON (application/json) as the format.
Enter the payload:
json
Copy code
{
  "fullName": "Updated Name",
  "password": "NewPassword123"
}
Click the Send button.
You should receive a response indicating the user was updated or any validation errors.
Delete a User (DELETE: /user/delete)

Open Postman.
Set the request type to DELETE.
Enter the URL: http://localhost:3000/user/delete?email=johndoe@example.com (replace with the user's email you want to delete).
Click the Send button.
You should receive a response indicating the user was deleted or any errors if the user doesn't exist.
Get All Users (GET: /user/getAll)

Open Postman.
Set the request type to GET.
Enter the URL: http://localhost:3000/user/getAll (or your server's URL).
Click the Send button.
You should receive a response with a list of all users' details, including names, emails, and passwords.
These steps will help you test each of your APIs with Postman, and the provided payloads correspond to the requirements you've described in your project.