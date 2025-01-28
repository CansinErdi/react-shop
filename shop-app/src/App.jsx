import React from 'react';
import './index.css';

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 text-center font-bold" style={{ fontSize: '8rem' }}>
      Mein Online-Shop
    </header>
  );
}

function ProductList() {
  const products = [
    { id: 1, name: 'Nike Air Max', price: '120€', image: 'https://shorturl.at/7LXuc' },
    { id: 2, name: 'Adidas UltraBoost', price: '160€', image: 'https://shorturl.at/zOKvp' },
    { id: 3, name: 'Puma RS-X', price: '110€', image: 'https://shorturl.at/oZ9CF' },
    { id: 4, name: 'Reebok Classic', price: '90€', image: 'https://shorturl.at/L0XVX' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded shadow hover:shadow-lg text-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 object-cover mx-auto"
            style={{ width: '150px', height: '150px' }}
          />
          <h3 className="text-lg font-bold mt-2">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center text-sm">
      © 2025 Mein Online Shop. Alle Rechte vorbehalten.
    </footer>
  );
}

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen text-center">
      <Header />
      <div className="flex-grow flex items-center justify-center w-full">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
