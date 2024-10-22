import React from 'react';
import Apartamento1 from '../img/apartamento1.webp';
import Apartamento2 from '../img/apartamento2.webp';
import Apartamento3 from '../img/apartamento3.webp';
import Apartamento4 from '../img/apartamento4.webp';
import Apartamento5 from '../img/apartamento5.webp';

const accommodations = [
  {
    name: 'Luxuoso com Serviço de Hotel',
    price: 'R$400 por noite',
    location: 'Batista Campos, Belém',
    img: Apartamento1,  
  },
  {
    name: 'AP moderno, com vista e bem localizado',
    price: 'R$400 por noite',
    location: 'Umarizal, Belém',
    img: Apartamento2,
  },
  {
    name: 'Apartamento, uma suite!',
    price: '$841 por noite',
    location: 'Nazaré, Belém',
    img: Apartamento3,
  },
  {
    name: 'Apartamento',
    price: 'R$421 por noite',
    location: 'Nazaré, Belém',
    img: Apartamento4,
  },
  {
    name: 'Luxuoso com Serviço de Hotel',
    price: 'R$444 por noite',
    location: 'Batista Campos, Belém',
    img: Apartamento5,
  },
];

const popularChoices = [
  {
    name: 'Shangri-La',
    location: 'Colombo, Sri Lanka',
    img: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Top View',
    location: 'Hikkaduwe, Sri Lanka',
    img: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Green Villa',
    location: 'Kandy, Sri Lanka',
    img: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Wodden Pit',
    location: 'Ambalangoda, Sri Lanka',
    img: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Boutiqe',
    location: 'Kandy, Sri Lanka',
    img: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Modern',
    location: 'Nuwara Eliya, Sri Lanka',
    img: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Silver Rain',
    location: 'Dehiwala, Sri Lanka',
    img: 'https://via.placeholder.com/400x300',
  },
  {
    name: 'Cashville',
    location: 'Ampara, Sri Lanka',
    img: 'https://via.placeholder.com/400x300',
  },
];

const AccommodationList = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Primeira Seção: Mais Escolhidos */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Mais escolhidos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {accommodations.map((acc, index) => (
          <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img src={acc.img} alt={acc.name} className="w-full h-48 object-cover" />
            
            {/* Preço no canto superior direito */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm px-3 py-1 rounded-bl-lg">
              {acc.price}
            </div>

            {/* Nome e Localização sobre a imagem */}
            <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/80 via-transparent to-transparent w-full">
              <h3 className="text-lg font-bold">{acc.name}</h3>
              <p className="text-sm">{acc.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Segunda Seção: Outras acomodações */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {popularChoices.map((acc, index) => (
          <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img src={acc.img} alt={acc.name} className="w-full h-48 object-cover" />

            {/* Nome e Localização sobre a imagem */}
            <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/80 via-transparent to-transparent w-full">
              <h3 className="text-lg font-bold">{acc.name}</h3>
              <p className="text-sm">{acc.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccommodationList;
