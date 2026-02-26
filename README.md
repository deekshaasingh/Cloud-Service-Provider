# Cloud Image Upload API

A production-style backend API for uploading images, storing them in cloud storage, and persisting post data in MongoDB.

Built using Node.js, Express, MongoDB Atlas, Multer, and ImageKit.

---

## Live Backend Features

* Upload images via REST API
* Store images securely on ImageKit cloud
* Save image URL and caption in MongoDB Atlas
* Fetch all uploaded posts
* Modular backend architecture
* Environment-based configuration
* Production-ready backend structure

---

## Tech Stack

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB Atlas
* Mongoose

**File Handling**

* Multer

**Cloud Storage**

* ImageKit

**Environment Management**

* dotenv

**Development Tools**

* Nodemon

---

## Architecture Overview

```id="arch001"
Client
  ↓
Express Server
  ↓
Multer Middleware
  ↓
ImageKit Cloud Storage
  ↓
MongoDB Atlas Database
  ↓
Response to Client
```

---

## Project Structure

```id="struct001"
cloud-image-upload-api/
│
├── src/
│   ├── app.js
│   ├── db/
│   │   └── db.js
│   ├── models/
│   │   └── post.model.js
│   └── services/
│       └── storage.services.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

---

## Environment Variables

Create a `.env` file:

```id="env001"
PORT=3000

MONGO_URI=your_mongodb_atlas_uri

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

## Installation

Clone repository:

```id="inst001"
git clone https://github.com/yourusername/cloud-image-upload-api.git
cd cloud-image-upload-api
```

Install dependencies:

```id="inst002"
npm install
```

Run server:

```id="inst003"
npx nodemon server.js
```

---

## API Endpoints

### Create Post

**POST** `/create-post`

Form-data:

| Field   | Type |
| ------- | ---- |
| image   | File |
| caption | Text |

Response:

```id="resp001"
{
  "message": "post created!",
  "post": {
    "_id": "...",
    "image": "https://ik.imagekit.io/...",
    "caption": "example"
  }
}
```

---

### Get All Posts

**GET** `/posts`

Response:

```id="resp002"
{
  "posts": [...]
}
```

---

## Key Backend Concepts Demonstrated

* REST API design
* Middleware usage
* File upload handling
* Cloud storage integration
* Database schema modeling
* Async/await operations
* Environment configuration
* Modular architecture

---

## Why This Project Matters

This project demonstrates real backend engineering skills used in production systems, including cloud integration, database persistence, and API development.

Relevant for MERN stack, backend, and full-stack developer roles.

---

## Future Improvements

* User authentication (JWT)
* Delete post endpoint
* Update post endpoint
* User accounts
* Frontend integration (React)
* Deployment (Render / AWS)

---

## Author

Deeksha Singh
Backend Developer (MERN)

---
