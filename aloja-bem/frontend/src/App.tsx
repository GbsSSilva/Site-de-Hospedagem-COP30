import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchForm from './components/SearchForm';
import AccommodationList from './components/AccommodationList';

interface ApiResponse {
  message: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SearchForm />
      <AccommodationList />
    </div>
  );
};

export default App;