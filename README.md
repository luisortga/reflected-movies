<div align="center">

# Reflected Movies

### A Static Movie Interface Powered by a REST API

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Anime.js](https://img.shields.io/badge/Anime.js-3.2.2-FF4D6D?style=for-the-badge)](https://animejs.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge\&logo=vercel\&logoColor=white)](https://vercel.com/)
[![REST API](https://img.shields.io/badge/Backend-REST%20API-6DB33F?style=for-the-badge)](https://github.com/luisortga/node-rest-api-dual-db)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)](https://www.mongodb.com/)
[![Render](https://img.shields.io/badge/API%20Hosting-Render-46E3B7?style=for-the-badge\&logo=render\&logoColor=black)](https://render.com/)

<br>

<a href="https://reflected-movies-static.vercel.app/">
  <img src="https://img.shields.io/badge/LIVE%20DEMO-Reflected%20Movies-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
</a>

</div>

---

## Overview

**Reflected Movies** is a static web application that consumes a custom REST API to display movie information dynamically.

The project was created as a frontend exercise focused on consuming a backend service, rendering API data in the browser, creating animated interfaces, and deploying a static application to **Vercel**.

Instead of storing movie data directly inside the frontend, the application communicates with a separately deployed REST API.

### Live Application

**Production:**
https://reflected-movies-static.vercel.app/

### Backend API

The application consumes the following REST API:

**API:**
https://node-rest-api-dual-db.onrender.com/

The backend is developed separately in Node.js and Express and uses MongoDB as its production database.

[View the REST API Repository](https://github.com/luisortga/node-rest-api-dual-db)

---

## Preview

<div align="center">

<img src="https://i.ibb.co/gx1h56J/logo-relfected.png" alt="Reflected Movies Preview" width="700">

</div>

---

## Architecture

The project follows a simple distributed architecture where the frontend, backend, and database are hosted independently.

```text
┌─────────────────────────────┐
│        User Browser         │
│                             │
│ HTML + CSS + JavaScript     │
└──────────────┬──────────────┘
               │
               │ HTTPS
               ▼
┌─────────────────────────────┐
│           Vercel            │
│                             │
│    Static Frontend          │
│                             │
│  Reflected Movies Website   │
└──────────────┬──────────────┘
               │
               │ GET /movies
               │
               ▼
┌─────────────────────────────┐
│           Render            │
│                             │
│   Node.js + Express REST    │
│            API              │
└──────────────┬──────────────┘
               │
               │ MongoDB Driver
               ▼
┌─────────────────────────────┐
│          MongoDB            │
│                             │
│       Movie Database        │
└─────────────────────────────┘
```

This separation makes the project a small example of a **decoupled frontend and backend architecture**.

---

## Technology Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,vercel,mongodb,nodejs,express&theme=dark" alt="Technology Stack">

</div>

### Frontend

| Technology | Purpose                              |
| ---------- | ------------------------------------ |
| HTML5      | Application structure                |
| CSS3       | Layout, styling and visual effects   |
| JavaScript | API consumption and DOM manipulation |
| Anime.js   | Interface animations                 |

### Infrastructure

| Service | Purpose                         |
| ------- | ------------------------------- |
| Vercel  | Static frontend hosting         |
| Render  | REST API hosting                |
| MongoDB | Production database             |
| GitHub  | Source code and version control |

---

## Features

### Dynamic Movie Rendering

Movie information is retrieved from the REST API and dynamically transformed into HTML cards.

The frontend requests:

```http
GET /movies
```

The API response is then used to generate the movie interface.

### Animated Interface

The project uses **Anime.js** to animate movie cards when they are rendered.

Cards appear sequentially with:

* Fade-in animation
* Vertical movement
* Staggered delays
* Smooth easing

The project also includes animated removal interactions for movie cards.

### Glassmorphism UI

The interface uses a dark visual style combined with:

* Transparent cards
* Background blur
* Rounded borders
* Shadows
* Hover transitions
* Green pistachio accent color

### Responsive Layout

Movie cards are displayed using a responsive CSS Grid:

```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

This allows the layout to adapt to different screen sizes.

---

## Frontend → API Communication

The application consumes the production API directly from the browser.

```javascript
fetch("https://node-rest-api-dual-db.onrender.com/movies")
```

The response is converted into JSON and used to generate the movie cards.

```text
API Response
     │
     ▼
JSON Data
     │
     ▼
JavaScript
     │
     ▼
DOM Generation
     │
     ▼
Movie Cards
```

This demonstrates the fundamental workflow of a frontend application consuming a RESTful backend.

---

## Deployment

The application is deployed as a static website using **Vercel**.

### Frontend

```text
GitHub Repository
       │
       ▼
     Vercel
       │
       ▼
Static Website
```

**Production URL:**

https://reflected-movies-static.vercel.app/

### Backend

The REST API is deployed independently using **Render**.

```text
Node.js + Express
        │
        ▼
      Render
        │
        ▼
    REST API
        │
        ▼
     MongoDB
```

This allows the frontend and backend to be developed, deployed, and maintained independently.

---

## Backend Project

The backend used by this application is a separate project:

### Node REST API — Dual Database

The API was developed with:

* Node.js
* Express
* MongoDB
* MySQL
* Zod
* Helmet
* CORS
* Morgan
* pnpm

The backend repository is available here:

**[github.com/luisortga/node-rest-api-dual-db](https://github.com/luisortga/node-rest-api-dual-db)**

The production API is hosted on Render:

**[node-rest-api-dual-db.onrender.com](https://node-rest-api-dual-db.onrender.com/)**

---

## Project Structure

```text
reflected-movies/
│
├── static/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── favicon.png
│
└── .gitignore
```

### Main Files

| File          | Responsibility                              |
| ------------- | ------------------------------------------- |
| `index.html`  | Main HTML document                          |
| `style.css`   | Application styling and responsive layout   |
| `script.js`   | API requests, DOM generation and animations |
| `favicon.png` | Browser favicon                             |

---

## UI Design

The visual design focuses on a dark cinematic interface.

### Visual Characteristics

```text
Dark Background
      +
Glassmorphism Cards
      +
Pistachio Green Accent
      +
Movie Posters
      +
Anime.js Animations
      ↓
Cinematic Movie Interface
```

The cards use translucent backgrounds and `backdrop-filter: blur()` to create the glassmorphism effect.

The pistachio green accent is also used for interactive elements and scrollbar styling.

---

## Concepts Practiced

This project was built to reinforce several frontend and web development concepts:

* Static website deployment
* REST API consumption
* HTTP `GET` requests
* JSON data handling
* JavaScript DOM manipulation
* Template generation
* Event delegation
* CSS Grid
* Responsive design
* CSS transitions
* Glassmorphism
* Browser-side API communication
* External JavaScript libraries
* Frontend/backend separation
* Cloud deployment
* Vercel deployment
* Render API deployment
* MongoDB-backed applications

---

## Running Locally

Because this is a static frontend, it can be served locally with a simple static server.

Clone the repository:

```bash
git clone https://github.com/luisortga/reflected-movies.git
```

Navigate into the project:

```bash
cd reflected-movies
```

Open the `static` directory with a local static server.

For example, using a simple development server:

```bash
npx serve static
```

The application will then be available through the local server URL.

> The frontend is configured to consume the deployed REST API, so a local backend is not required just to visualize the current production movie data.

---

## Learning Objectives

This project represents a step toward understanding how independently deployed applications communicate with each other.

The main objective was to connect the concepts of:

```text
Frontend
   │
   │ HTTP
   ▼
REST API
   │
   │ Database Driver
   ▼
MongoDB
```

while also learning how to deploy the individual layers using different cloud platforms.

---

## Related Project

<div align="center">

### Node REST API — Dual Database

<a href="https://github.com/luisortga/node-rest-api-dual-db">

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,mysql&theme=dark" alt="Backend Technologies">

</a>

<br>

<a href="https://github.com/luisortga/node-rest-api-dual-db">
  <img src="https://img.shields.io/badge/View%20Backend%20Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="Backend Repository">
</a>

</div>

The two repositories form a complete small-scale web application:

```text
┌─────────────────────────┐
│     Reflected Movies    │
│                         │
│   Static Frontend       │
│        Vercel           │
└────────────┬────────────┘
             │
             │ REST
             ▼
┌─────────────────────────┐
│   Node REST API         │
│                         │
│ Node.js + Express       │
│        Render           │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│        MongoDB          │
│                         │
│    Movie Persistence    │
└─────────────────────────┘
```

---

## Future Improvements

Potential improvements for future versions include:

* Add movie search
* Add genre filtering
* Add movie detail views
* Improve error handling
* Add loading states
* Add an API configuration layer
* Improve accessibility
* Add pagination
* Add a dedicated production delete endpoint
* Add automated frontend tests
* Improve mobile interactions
* Add environment-based API configuration

---

## Disclaimer

This project is an educational and portfolio project created to practice frontend development, REST API integration, database-backed applications, and cloud deployment.

Movie posters and related visual assets belong to their respective owners.

---

## Author

<div align="center">

### Luis Ortega

Backend Developer · DevOps Learner · Frontend Learner

<br>

<a href="https://github.com/luisortga">
  <img src="https://img.shields.io/badge/GitHub-luisortga-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>

</div>

---

<div align="center">

### Reflected Movies

**Static Frontend · REST API · MongoDB · Cloud Deployment**

<br>

<a href="https://reflected-movies-static.vercel.app/">
  <img src="https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
</a>

<a href="https://github.com/luisortga/reflected-movies">
  <img src="https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
</a>

</div>
