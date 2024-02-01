# Very Simple Node.js API with SQLi

This is a simple Node.js API that demonstrates SQL injection vulnerability. It requires Node.js to be installed on your machine.

## Simple Express Server

This is a simple Express server that provides a basic CRUD (Create, Read, Update, Delete) API for managing blog posts. It uses a JSON file as a simple database.

### Features

- **Express.js**: This is the main framework used to build the server.
- **Body-parser**: This is a middleware used to parse incoming request bodies before your handlers.
- **File System (fs)**: This is a Node.js built-in module used to interact with the file system on your computer.

### Endpoints

- `GET /`: Returns a simple greeting message.
- `GET /posts`: Returns all the posts in the database.
- `GET /search`: This is an example of a vulnerable endpoint that could be susceptible to SQL injection. It's not actually connected to a database, but shows how not to construct a SQL query.
- `GET /posts/search`: This endpoint accepts a query parameter `keyword` and returns all posts whose title includes the keyword. This is a safer way to implement search functionality.
- `POST /posts`: Adds a new post to the database. The new post should be provided in the request body.
- `PUT /posts/:id`: Updates the post with the given id. The updated post should be provided in the request body.
- `DELETE /posts/:id`: Deletes the post with the given id.

## Usage

1. Clone the repository.
2. Navigate to the root of the folder and run `npm install`.
3. To start the server, run `node server.js`. The server will start on `http://localhost:3000`.
4. Visit `http://localhost:3000/posts` to see 2 sample posts.

## Scanning with Veracode

You can run Greenlight against the file. One method to scan the file is using the Veracode CLI. Make sure the CLI is installed.

1. ZIP up the `server.js` file with your preferred method, such as 7zip: `7z a server.zip server.js`.
2. Then run the Veracode Static Scan: `veracode static scan server.zip`.
3. Now, run Veracode Fix against the file: `veracode fix server.js`.
4. If running VS Code with Greenlight, you can use that to verify the issue is resolved, or re-run step 2.

## Note

This is a simple server meant for demonstration purposes and it contains a SQLi, for demonstrations purposes only.