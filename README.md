# Twitter Clone

## Project Overview
This project is a Twitter clone built with modern web technologies. It provides users with features similar to Twitter, including posting tweets, following users, and interacting with content. The application uses a MERN (MongoDB, Express, React, Node.js) stack and other libraries to enhance development and user experience.

## Technologies Used

### Frontend
- **@tanstack/react-query**: For managing server state and fetching data efficiently.
- **React**: For building the user interface.
- Additional libraries may include tools for styling, routing, and state management.

### Backend
- **bcryptjs**: For hashing and comparing passwords.
- **cloudinary**: For storing and managing images.
- **cookie-parser**: For parsing cookies in requests.
- **cors**: To handle Cross-Origin Resource Sharing.
- **dotenv**: For environment variable management.
- **express**: To build the backend server and APIs.
- **jsonwebtoken**: For implementing authentication with JSON Web Tokens.
- **mongoose**: To interact with MongoDB.

## Features
- **User Authentication**: Secure registration and login using JWT and bcryptjs.
- **Tweet Posting**: Users can post tweets with text and images.
- **Follow System**: Follow and unfollow other users to see their tweets.
- **Like and Comment**: Interact with tweets by liking and commenting.
- **Real-Time Updates**: Live updates for tweets and interactions.
- **Image Uploads**: Integrated with Cloudinary for handling image uploads.

## Installation

### Prerequisites
- Node.js and npm installed.
- MongoDB instance running.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/NuwanSubasingha99/twitter-clone
   cd twitter-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=<your-mongo-db-uri>
   JWT_SECRET=<your-jwt-secret>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```

4. Run the application:
   - Start the backend server:
     ```bash
     npm run dev
     ```
   - Start the frontend:
     ```bash
     npm run dev
     ```

## Usage
- Open the application in your browser at `http://localhost:3000`.
- Register a new account or log in with an existing account.
- Post tweets, follow users, and interact with tweets.
  
## Acknowledgments
- Inspired by Twitter's functionality and UI design.
- Thanks to the developers and maintainers of the libraries used in this project.

