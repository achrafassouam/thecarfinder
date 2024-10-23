# Car Finder Application

## Description
Car Finder is a web application that helps users find their perfect car match based on various criteria such as brand, price range, transmission type, body type, seating capacity, and fuel type. The application provides a user-friendly interface for searching and viewing car recommendations.

## Features
- Dynamic car filtering based on multiple criteria
- Real-time car recommendations
- Responsive design for all device sizes
- Generic car images based on body type
- Navigation system with Home, About Us, and Login pages
- Interactive user interface with form validation

## Tech Stack
### Frontend
- React.js
- CSS3
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose ODM

## Project Structure
```
project-root/
├── frontend/
│   ├── public/
│   │   └── images/
│   └── src/
│       ├── components/
│       │   ├── FilterForm.js
│       │   ├── Header.js
│       │   ├── Footer.js
│       │   └── RecommendationsTable.js
│       ├── pages/
│       │   ├── About.js
│       │   └── Login.js
│       ├── styles/
│       │   └── Header.css
│       ├── App.js
│       └── index.js
└── backend/
    ├── public/
    │   └── images/
    │       └── generic/
    │           ├── sedan.jpg
    │           ├── suv.jpg
    │           └── ...
    ├── models/
    │   └── Car.js
    ├── routes/
    │   └── carRoutes.js
    └── server.js
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

### Setup Steps

1. Clone the repository:
```bash
git clone [repository-url]
cd car-finder
```

2. Backend Setup:
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the following content:
```
PORT=5001
MONGODB_URI=mongodb://localhost:27017/car_recommendations
```

3. Frontend Setup:
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory with:
```
REACT_APP_BACKEND_URL=http://localhost:5001
```

## Running the Application

1. Start the MongoDB server:
```bash
mongod
```

2. Start the backend server:
```bash
cd backend
npm start
```

3. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

### Cars
- `GET /api/recommendations` - Get car recommendations based on filters
- `POST /api/recommendations` - Submit filters and get matching cars

## Database Schema

### Car Model
```javascript
{
  brand: String,
  model: String,
  price: Number,
  transmission: String,
  bodyType: String,
  seatingCapacity: Number,
  fuelType: String
}
```


## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Contact
Your Name - [Achraf Assouam]
Email: [achrafassouam@gmail.com]
