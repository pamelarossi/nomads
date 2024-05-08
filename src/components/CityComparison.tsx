import React, { useEffect, useState } from 'react';
import axios from '../api';
import { CityDetails } from './CityDetails';

interface CityComparisonProps {
  cities: string[];
}

const CityComparison: React.FC<CityComparisonProps> = ({ cities }) => {
  const [cityDetails, setCityDetails] = useState<CityDetails[]>([]);

  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        const promises = cities.map(cityId => axios.get(`/cities/${cityId}`));
        const responses = await Promise.all(promises);
        const cityDetailsData = responses.map(response => response.data);
        setCityDetails(cityDetailsData);
      } catch (error) {
        console.error('Error fetching city details:', error);
      }
    };

    if (cities.length > 0) {
      fetchCityDetails();
    } else {
      setCityDetails([]);
    }
  }, [cities]);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
        <div>
          <strong>City</strong>
          {cityDetails.map(city => <div key={city.cityId}>{city.name}</div>)}
        </div>
        <div>
          <strong>Country</strong>
          {cityDetails.map(city => <div key={city.cityId}>{city.country}</div>)}
        </div>
        <div>
          <strong>Cost of Living</strong>
          {cityDetails.map(city => <div key={city.cityId}>{city.costOfLivingIndex}</div>)}
        </div>
        <div>
          <strong>Download Speed</strong>
          {cityDetails.map(city => <div key={city.cityId}>{city.internetSpeed.download}</div>)}
        </div>
        <div>
          <strong>Upload Speed</strong>
          {cityDetails.map(city => <div key={city.cityId}>{city.internetSpeed.upload}</div>)}
        </div>
        <div>
          <strong>Safety Index</strong>
          {cityDetails.map(city => <div key={city.cityId}>{city.safetyIndex}</div>)}
        </div>
        <div>
          <strong>Temperature</strong>
          {cityDetails.map(city => <div key={city.cityId}>{city.climate.averageTemperature}</div>)}
        </div>
        <div>
          <strong>Rainfall</strong>
          {cityDetails.map(city => <div key={city.cityId}>{city.climate.rainfall}</div>)}
        </div>
        <div>
          <strong>Coworking Spaces</strong>
          {cityDetails.map(city => <div key={city.cityId}>{city.coworkingSpaces.length}</div>)}
        </div>
      </div>
    </div>
  );
}

export default CityComparison;
