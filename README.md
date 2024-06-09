# firebase-user-auth
A template to create a user authentication using Firebase

## Installation
Clone the repository:
```
https://github.com/yourusername/firebase-user-auth.git
```
or download zip folder and extract it.

Change to the project directory:
```
cd firebase-user-auth
```

Install packages:
```
npm install
```

### Setup Firebase Authentication
1. Create a Firebase Project:

- Go to the Firebase Console.
- Click on "Add project", follow the instructions, and create your project.

2. Enable Authentication:

- Navigate to the "Authentication" section.
- Click on the "Get started" button.
- Enable the sign-in methods, "Email/Password" and others that you want to use (e.g., Google, Facebook).

3. Register Your App with Firebase:

- In the Project Overview, add a new application by selecting the web app icon.
- Follow the instructions to register your app.

4. Configure Firebase SDK in Your Application:

- Create a `.env` file and place your Firebase configuration keys in the `.env` file as follows:
```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```

### Running the Project
Start the development server:
```
npm start
```

Your application should now be running at http://localhost:3000.
<img width="1800" alt="Screenshot 2024-06-09 at 5 31 12 PM" src="https://github.com/NotJerwee/firebase-user-auth/assets/103540592/1d80c21a-51fc-4d97-b6e8-2d5dea5000f6">

## Features
Google Authentication: Seamlessly integrate Google sign-in to your application.
Email/Password Authentication: Enable traditional email and password sign-in.
Firebase Integration: Simplified setup and configuration for Firebase authentication.


## Tech Sack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
