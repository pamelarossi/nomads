
import React, { useState, useEffect } from 'react';
import axios from '../api';

export interface CityDetails {
  cityId: string;
  name: string;
  country: string;
  costOfLivingIndex: number;
  internetSpeed: { download: number; upload: number };
  coworkingSpaces: { name: string; address: string; rating: number }[];
  safetyIndex: number;
  climate: { averageTemperature: number; rainfall: number };
}

interface CityDetailsProps {
  cityId: string;
  onClose: () => void;
}

const CityDetails: React.FC<CityDetailsProps> = ({ cityId, onClose }) => {
  const [city, setCity] = useState<CityDetails | null>(null);

  useEffect(() => {
    const fetchCityDetail = async () => {
      try {
        const response = await axios.get(`/cities/${cityId}`);
        setCity(response.data);
      } catch (error) {
        console.error('Error fetching city details:', error);
      }
    };

    fetchCityDetail();
    return () => {
      setCity(null);
    };
  }, [cityId]);

  if (!city) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', position: 'relative' }}>
      <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', border: 'none', background: 'transparent', cursor: 'pointer' }}>X</button>
      <h2>{city.name}</h2>
      <p>Country: {city.country}</p>
      <p>Cost of Living Index: {city.costOfLivingIndex}</p>
      <p>Internet Speed: {city.internetSpeed.download} Mbps (Download), {city.internetSpeed.upload} Mbps (Upload)</p>
      <p>Safety Index: {city.safetyIndex}</p>
      <p>Climate: Average Temperature: {city.climate.averageTemperature}°C, Rainfall: {city.climate.rainfall} mm</p>
      <div>
        <h3>Coworking Spaces</h3>
        {city.coworkingSpaces.map((space, index) => (
          <div key={index}>
            <p>Name: {space.name}</p>
            <p>Address: {space.address}</p>
            <p>Rating: {space.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityDetails;