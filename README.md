# Quiz App

## Overview
Quiz App is a simple React application that provides a quiz based on questions fetched from an external API. The app requires users to log in before they can start the quiz.

## Features
- User authentication
- Fetches quiz questions from an external API
- Timer for quiz duration
- Result display after quiz completion

## How to Use
1. **Login:**
   - Use the following credentials to log in:
     - **Username:** `admin`
     - **Password:** `admin`

2. **Taking the Quiz:**
   - After logging in, you will be redirected to the quiz page.
   - Answer the questions by selecting one of the multiple-choice options.
   - Click "Next" to move to the next question.
   - After completing the quiz, your score and the number of correct and incorrect answers will be displayed.

3. **Timer:**
   - The quiz has a total duration of 3 minutes. If the time expires before completing all questions, the quiz will end and the results will be displayed.

## Installation
To run this application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/quiz-app.git
   cd quiz-app

2. **Install dependencies:**
   ```bash
   npm install

3. **Start development server:**
   ```bash
   npm run dev