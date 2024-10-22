import React from 'react';
import interiorImage from '../img/interior1.webp'; 

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Esqueça os problemas, <br />
            Comece sua viagem.
          </h1>
          <p className="text-gray-600 mb-8">
            Nós fornecemos o que você precisa para desfrutar de sua viagem com conforto.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Mostrar
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={interiorImage}  
            alt="Interior de Acomodações"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
