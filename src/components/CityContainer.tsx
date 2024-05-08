import React, { useState, useEffect } from 'react';
import axios from '../api';
import CityList from './CityList';
import Header from './Header';
import WorldMapImage from '../images/worldMap.jpg';
import Filter from './Filter';

export interface City {
  cityId: string;
  name: string;
  country: string;
}

const CityContainer: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('/cities');
        const allCities=response.data.cities.map((city:City) => ({
          name: city.name,
          country: city.country,
          cityId:city.cityId
        }));
        setCities(allCities);
        setFilteredCities(allCities);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div>
       <Header />
       <div style={{ backgroundColor: '#f5f5f5', backgroundSize: 'cover', minHeight: '100vh', padding: '10px' }}>
       <Filter cities={cities} setFilteredCities={setFilteredCities} />
        <CityList cities={filteredCities} />
      </div>
    </div>
  );
}

export default CityContainer;