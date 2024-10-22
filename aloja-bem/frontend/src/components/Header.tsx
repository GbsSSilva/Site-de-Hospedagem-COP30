import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          ALOJABEM.COM
        </div>
        {/* Menu */}
        <nav className="space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-500">Hotéis</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Quartos</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Sobre</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Contato</a>
        </nav>
        {/* Botão de Login */}
        <a href="#" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Login
        </a>
      </div>
    </header>
  );
};

export default Header;
