# Calculator Web Application

A simple and interactive calculator web application built using React and TailwindCSS. This project is designed to perform basic arithmetic operations and maintain a history of calculations.

## Features

- Perform basic arithmetic operations: addition, subtraction, multiplication, and division.
- View the history of previous calculations.
- Responsive design for seamless usage across devices.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Build Tool**: Vite
- **HTTP Client**: Axios

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or higher)
- npm or yarn

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/calculator.git
cd calculator
```

### 2. Install Dependencies

Navigate to the `frontend` and `backend` directories and install the required dependencies:

```bash
# For frontend
cd frontend
npm install

# For backend
cd ../backend
npm install
```

### 3. Start the Application

Run the frontend and backend servers:

```bash
# Start the backend server
cd backend
npm start

# Start the frontend development server
cd ../frontend
npm run dev
```

The application will be available at `http://localhost:5173`.

## Project Structure

```
Calculator/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # API controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── server.js        # Entry point for the backend
│   └── package.json     # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API service files
│   │   ├── App.jsx      # Main application component
│   │   ├── main.jsx     # Entry point for React
│   │   └── index.css    # Global styles
│   ├── public/          # Static assets
│   ├── vite.config.js   # Vite configuration
│   └── package.json     # Frontend dependencies
└── README.md            # Project documentation
```

## Scripts

### Frontend

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.

### Backend

- `npm start`: Start the backend server.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any feature additions or bug fixes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

For any inquiries or feedback, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)
