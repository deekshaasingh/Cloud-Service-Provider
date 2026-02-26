# Cloud Image Upload Backend (Node.js, Express, MongoDB, ImageKit)

A backend API that allows users to upload images with captions, stores images on ImageKit cloud storage, and saves post data in MongoDB Atlas.

This project demonstrates a complete backend pipeline including file upload handling, cloud storage integration, database persistence, and REST API development.

---

## Features

* Upload image files using Multer
* Store images securely on ImageKit cloud storage
* Save image URL and caption in MongoDB Atlas
* Fetch all uploaded posts using API
* RESTful API built with Express.js
* Environment variable configuration using dotenv
* Clean and modular backend architecture

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Multer
* ImageKit
* dotenv
* Nodemon

---

## Project Structure

```
project-root/
│
├── src/
│   ├── app.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── post.model.js
│   │
│   └── services/
│       └── storage.services.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000

MONGO_URI=your_mongodb_atlas_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

## Installation and Setup

### 1. Clone the repository

```
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```
npm install
```

### 3. Start the server

```
npx nodemon server.js
```

Server will run on:

```
http://localhost:3000
```

---

## API Endpoints

### Create Post

**POST** `/create-post`

Form-data:

| Field   | Type | Description   |
| ------- | ---- | ------------- |
| image   | File | Image file    |
| caption | Text | Image caption |

Response:

```
{
  "message": "post created!",
  "post": {
    "_id": "...",
    "image": "https://imagekit.io/...",
    "caption": "example caption"
  }
}
```

---

### Get All Posts

**GET** `/posts`

Response:

```
{
  "message": "posts fetched",
  "posts": [...]
}
```

---

## How It Works

1. Client uploads image and caption
2. Multer extracts file from request
3. Image is uploaded to ImageKit cloud storage
4. ImageKit returns image URL
5. URL and caption are saved in MongoDB
6. Backend returns saved post

---

## Learning Outcomes

This project demonstrates:

* Backend architecture design
* File upload handling in Node.js
* Cloud storage integration
* MongoDB database operations
* REST API development
* Environment configuration

---

## Future Improvements

* Add user authentication
* Add delete post endpoint
* Add update post endpoint
* Connect frontend (React)
* Deploy backend to cloud

---

## Author

Deeksha Singh

---
