# EZSeller – Product Management App

A full-stack web application that allows users to manage products — including adding, editing, deleting, and viewing product details — with secure login authentication and theme customization. The backend is built with Express, connected to a NeonDB PostgreSQL database, and protected by ArcJet for bot and rate limiting. The frontend uses React, Zustand for state management, and TailwindCSS (with DaisyUI) for styling. The project is deployed fully on Render.

## Features
- Add, edit, and delete products
- Theme switcher (light/dark/forest…)
- Simple login authentication (hardcoded user)
- Rate limiting & bot protection with ArcJet
- Zustand for global state (products, auth, theme)
- Deployed on Render (backend + frontend)

## Project Structure

```
.
├── backend/         # Express server, routes, auth, database
├── frontend/        # React app using Zustand, Tailwind, Router
├── .env             # Environment variables (not included in ZIP)
├── package.json     # Shared root config
```

## How to Run Locally

1. Clone the repo:
```bash
git clone <your-repo-url>
cd your-project-folder
```

2. Start the backend:
```bash
cd backend
npm install
npm start
```

3. Start the frontend:
```bash
cd ../frontend
npm install
npm run dev
```

## Demo Credentials

- Username: `admin`  
- Password: `admin123`

## Live Demo

👉 https://your-live-site.onrender.com

> This project was built for demonstration purposes — optimized for simplicity, clean structure, and ease of deployment.
