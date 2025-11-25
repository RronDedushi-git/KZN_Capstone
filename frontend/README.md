# KZN – Kaizen 1% Better

KZN is a full-stack MERN application that helps users improve 1% each day through simple, achievable micro-steps. Inspired by the Kaizen philosophy, the app provides small, consistent actions that build long-term momentum across different areas of life.

## Features

- Create custom categories (Fitness, Cleaning, Mindfulness, Productivity, etc.)
- Add micro-steps inside each category
- Generate a random micro-step with one click
- Complete a step and receive a clean confirmation modal
- Delete individual micro-steps
- Delete an entire category and all its steps
- Default seeded categories and steps on first load
- Clean and minimal UI with smooth navigation
- Fully functional CRUD operations for categories and steps

## Technologies Used

### Frontend

- React (Vite)
- JavaScript (ES6)
- HTML/CSS
- React Router
- Fetch API

### Backend

- Node.js
- Express
- MongoDB / Mongoose
- dotenv
- CORS

## API Endpoints

### Category Routes

- GET /api/categories
- POST /api/categories
- DELETE /api/categories/:id

### Step Routes

- GET /api/steps/random/:categoryId
- GET /api/steps/:categoryId
- POST /api/steps
- DELETE /api/steps/:id

The backend automatically seeds default categories and steps on first run.

## How to Run the Project

### Backend

```
cd backend
npm install
npm run dev
```

Create a `.env` file containing:

```
ATLAS_URI=yourMongoDBString
PORT=5500
```

### Frontend

```
cd frontend
npm install
npm run dev
```

## Usage

1. Start on the home page and click “Become 1% Better Today.”
2. Select a category.
3. View or manage the list of micro-steps.
4. Generate a random micro-step.
5. Complete the step and view the confirmation modal.
6. Add or delete steps inside a category.
7. Create new categories as needed.

## Approach and Design Decisions

- MongoDB stores all categories and steps for persistence.
- The backend exposes clean, RESTful API endpoints.
- Steps are linked to categories using an ObjectId reference.
- Global styles keep the UI clean and consistent.
- Components are organized into pages and helper hooks for clarity.
- A custom modal system was built for step completion, with animations and overlay transitions.
- Index.css holds all global UI styling for consistency and easy maintenance.

## Unsolved Problems / Future Improvements

- Add user authentication
- Track completed steps per day
- Add streaks and analytics
- Improve mobile responsiveness
- Allow custom icons for categories

## Live Site
