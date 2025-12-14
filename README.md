# Trainer — Language Learning Platform (Frontend)

Frontend application for a language learning platform focused on vocabulary acquisition through interactive tests.
The application communicates with a FastAPI backend via REST API and provides a multilingual user interface.

## Features
* User registration and authentication
* JWT-based authorization (access & refresh tokens)
* Vocabulary learning interface
* Interactive testing workflow
* Progress tracking
* Multilingual interface:
  * Russian
  * Azerbaijani
* Responsive UI built with plain CSS

## Tech Stack

* Framework: Vue.js
* Styling: Plain CSS (CSS Modules)
* API Communication: REST API
* Authentication: JWT (stored in localStorage)
* Internationalization: Custom i18n implementation (JSON-based translations)
* Build Tool: Vite
* DevOps: Docker, Nginx

## Application Overview

* The frontend allows users to:
* Sign up and log in
* Choose interface language (RU / AZ)
* Select words to learn or mark them as already known
* Complete vocabulary tests:
  * Multiple-choice translation
  * Reverse translation
  * Typing test
  * Remember / Forgot confirmation
* Track personal learning progress
All user actions are synchronized with the backend via REST API.

## Project Structure

```angular2html
trainer-front/
├── public/
│   └── locales/
│       ├── ru/
│       └── az/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── hoc/
│   ├── i18n.js
│   ├── routers.jsx
│   ├── main.jsx
│   └── App.jsx
├── Dockerfile
├── nginx.conf
├── package.json
└── vite.config.js
```

## Authentication & API

* Authentication is handled via the backend
* Access and refresh tokens are stored in localStorage
* Token refresh is handled automatically during API requests
* Protected routes are guarded on the frontend side

## Internationalization (i18n)
* The application supports Russian and Azerbaijani
* Translations are stored as JSON files
* Language can be switched dynamically from the UI

Running the Project
Local Development
```bash

npm install
npm run dev
```

Docker

The frontend can also be built and served using Docker:
```bash

docker build -t trainer-front .
docker run -p 80:80 trainer-front
```

In production, the frontend is served via Nginx and can be integrated with the backend using Docker Compose.

## Backend

The backend is implemented with FastAPI and located in a separate repository:

👉 [backend-trainer](https://github.com/Nurlan-Aliev/trainer)

The frontend communicates with the backend via REST API and relies on it for:
* authentication
* business logic
* vocabulary management

## Project Status

This is a pet project built to demonstrate frontend and full-stack integration skills.
The project is actively evolving and open for further improvements.

## Author

Nurlan Aliev

Python Backend Developer

[GitHub](https://github.com/Nurlan-Aliev) [LinkedIn](https://linkedin.com/in/nurlan-aliev)