import React, { useEffect, useState } from 'react';
import { City } from './CityContainer';

interface FilterProps {
  cities: City[];
  setFilteredCities: (filteredCities: City[]) => void;
}

const Filter: React.FC<FilterProps> = ({ cities, setFilteredCities }) => {
  const [countryFilter, setCountryFilter] = useState<string>('');

  useEffect(()=>{
    const filteredCities = countryFilter ? cities.filter(city => city.country === countryFilter) : cities;
      setFilteredCities(filteredCities);
    },[countryFilter]);

  return (
    <div style={{ marginBottom: '20px', backgroundColor:'#e9f2f4',padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div>
        <label htmlFor="countryFilter" style={{ marginRight: '10px' }}>Country:</label>
        <select
          id="countryFilter"
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: '#f5f5f5',
            color: '#333',
            cursor: 'pointer',
          }}
        >
          <option value="">All</option>
          {Array.from(new Set(cities.map(city => city.country))).map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;
