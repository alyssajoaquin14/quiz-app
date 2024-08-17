# Quiz App

This is a simple quiz application that collects a user's weight, birthday, and email, submitting the data to an API, and then displaying a confirmation page.

## Features

- three step form with inputs for weight, birthday, and email
- includes basic validation for inputs
- stores data on a JSON file using a backend API 

## Prerequisites

- node.js

## Getting Started

### 1. Clone the Repository

### 2. Install Dependencies 

```bash
npm install 
```

### 3. Run the Application Locally

```bash
npm run dev
```

This will start the app on <http://localhost:3000>. Open your browser to the URL to use the application.

### 4. Running the BackendAPI

The backend API is included in the Next.js application and no additional steps are needed to run the backend separately.

- API Endpoint: The API is accessible at /api/submit

### 5. Data Storage

For simplicity, the quiz data is submitted and stored in a JSON file located at data/quizData.json.

