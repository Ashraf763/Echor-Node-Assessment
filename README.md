### Sentence Transformer API

A lightweight Express.js API designed to take a sentence as input and return various linguistic transformations, including word count, unique words, and the reversed sentence.

### 🚀 Features

- This API exposes a single endpoint that performs the following transformations on the provided sentence:
  - Word Count: The total number of words in the sentence.
  - Unique Words: A list of unique words (normalized to lowercase, with punctuation removed).
  - Reversed Sentence: The original sentence with the order of words reversed.

### 🛠️ Setup and Installation

This project is built using Node.js and Express.js.

# Prerequisites

You must have Node.js (version 12+) and npm installed on your system.

### Install Dependencies:

Use npm to install the required packages (only express is needed):

npm install

### ▶️ Running the Server

Start the application using the pre-defined script in package.json:

- npm start

The server will start on port 3000. You will see the following output in your console:

- Server is running on http://localhost:3000
  Endpoint: POST /api/transform

### 📦 API Endpoint

POST "/api/transform"

This endpoint accepts a JSON payload containing the sentence to be analyzed and transformed.

- Example Request Body

  {
  "sentence": "I love working with JavaScript and Node.js."
  }

Example Successful Response (HTTP 200)

{
"word_count": 7,
"unique_words": ["i", "love", "working", "with", "javascript", "and", "node.js"],
"reversed_sentence": "Node.js and JavaScript with working love I"
}

Error Response (HTTP 400)

If the sentence key is missing or is empty, the server returns an error:

     {
          "error": "Invalid input, Please provide a valid input"
     }

And if the API endpoint is missing, it displayes error message:

    {
        "error": Add path '/api/transform' to use the API
    }

### 🚀 Testing

Use POSTMAN or Thunder Client for testing.
