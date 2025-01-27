# React Shop App

This project is a simple online shop application built with React and Vite. It uses Tailwind CSS for styling and includes basic functionalities such as displaying a list of products.

## Features

- **Header**: Displays the shop name "Mein Online Shop" with a large font size.
- **Product List**: Shows a list of products with their names and prices.
- **Footer**: Displays a footer with a copyright message.

## Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/react-shop-app.git
   cd react-shop-app
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the development server**:
   ```sh
   npm run dev
   ```

4. **Build for production**:
   ```sh
   npm run build
   ```

## Changes Made

### Main Application File

- **File**: `src/main.jsx`
- **Changes**:
  - Increased the font size of the header text to make it more prominent.
  - Centered the content of the website using Tailwind CSS classes.

### CSS File

- **File**: `src/index.css`
- **Changes**:
  - Ensured the body and root elements are centered.
  - Imported Tailwind CSS base, components, and utilities.

### Tailwind CSS Configuration

- **File**: `tailwind.config.js`
- **Changes**:
  - Configured Tailwind CSS to scan the appropriate files for class names.

## Additional Information

This project uses Vite for fast development and hot module replacement (HMR). Tailwind CSS is used for styling, providing utility-first CSS classes to build responsive and modern UIs.

For more information on Vite and Tailwind CSS, refer to their official documentation:
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
