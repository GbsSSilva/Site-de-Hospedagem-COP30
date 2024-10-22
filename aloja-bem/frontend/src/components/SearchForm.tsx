import React from 'react';

const SearchForm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <form className="bg-blue-50 shadow-md rounded-full p-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center">
        
        {/* Verificar Disponibilidade */}
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm p-3 w-full lg:w-auto">
          <span className="mr-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 9h10m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Confira disponível"
            className="w-full lg:w-auto focus:outline-none text-gray-600"
          />
        </div>

        {/* Seleção de Pessoas */}
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm p-3 w-full lg:w-auto">
          <span className="mr-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 18A2 2 0 015 17V7a2 2 0 011.879-1.995L7 5h10a2 2 0 011.995 1.879L19 7v10a2 2 0 01-1.879 1.995L17 19H7z"
              />
            </svg>
          </span>
          <select className="w-full lg:w-auto focus:outline-none text-gray-600">
            <option>1 Pessoa</option>
            <option>2 Pessoas</option>
            <option>3 Pessoas</option>
          </select>
        </div>

        {/* Seleção de Local */}
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm p-3 w-full lg:w-auto">
          <span className="mr-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Selecione o local"
            className="w-full lg:w-auto focus:outline-none text-gray-600"
          />
        </div>

        {/* Botão de Pesquisa */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 transition w-full lg:w-auto">
          Pesquisar
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
