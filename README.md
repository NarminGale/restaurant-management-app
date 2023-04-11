# Restaurant Management App

This is a web application that allows restaurant owners to manage orders by taking orders, calculating quantity, amount, order statuses, and delivery times. 

## Technologies Used

- `React`
- `sass`
- `react-redux` for state management
- `react-select` for dropdown menus
- `json-server` for easy API creation and development
- `react-bootstrap` for responsive UI design
- `react-router-dom` for client-side routing
- `react-hook-form` for form validation
- `@reduxjs/toolkit` for streamlined Redux development
- `@reduxjs/toolkit/query` for efficient data fetching

## Features

- Home page with a brief introduction and sidebar navigation
- Dashboard page with a summary of the restaurant's total orders, revenue
- Menu page with a list of all the restaurant's menu items
- Orders page with a list of all the restaurant's orders
- Order page with a detailed view of a single order
- Add order page with a form to add a new order

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/NarminGale/restaurant-management-app`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the browser and go to `http://localhost:3000`
5. Start the API json server by running the following command in a new terminal window: `json-server --watch data/api.json --port 3500` 
6. To view the API, open the browser and go to `http://localhost:3500/orders`

## Usage

The application is designed to be used by restaurant owners to manage orders. The application allows the user to:
- Create new orders by filling out the order form.
- View and manage orders.
- View the delivery time for each order.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.