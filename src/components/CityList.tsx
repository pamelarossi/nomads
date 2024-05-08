import React, { useEffect, useState } from 'react';
import CityComparison from './CityComparison';
import { City } from './CityContainer';
import CityDetails from './CityDetails';

interface CityListProps {
  cities: City[];
}

const CityList: React.FC<CityListProps> = ({ cities }) => {
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const uniqueCountries = Array.from(new Set(cities.map(city => city.country)));

  const handleCityRadioChange = (cityId: string) => {
    setSelectedCityId(cityId === selectedCityId ? null : cityId);
  };

  const handleCloseDetails = () => {
    setSelectedCityId(null);
  };
  const handleCitySelection = (cityId: string) => {
    if (selectedCities.includes(cityId)) {
      setSelectedCities(selectedCities.filter(id => id !== cityId));
    } else {
      setSelectedCities([...selectedCities, cityId]);
    }
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  useEffect(()=>{
    if (!showPopup) setSelectedCities([]);
  }, [showPopup]);

  return (
    <>
      <button 
        disabled={selectedCities.length<2}
        onClick={togglePopup} 
        style={{
          padding: '10px 20px',
          backgroundColor: selectedCities.length<2 ? '#ccc' : 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: selectedCities.length<2 ? 'not-allowed' : 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: '0.3s',
        }}
      >
        COMPARE CITIES
      </button>
      <div style={{ backgroundColor: '#c8e2e8', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '800px', margin: '0 auto' }}>
        {uniqueCountries.map(country => (
          <div key={country} style={{ marginBottom: '20px' }}>
            <h2 style={{ color: '#333', borderBottom: '2px solid #ccc', paddingBottom: '2px' }}>{country}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '10px' }}>
              {cities
                .filter(city => city.country === country)
                .map(city => (
                  <div key={city.cityId} style={{ backgroundColor: `${selectedCities.includes(city.cityId) ? '#86c3d0' : 'white'}`, padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: 'calc(50% - 10px)', marginBottom: '20px', maxHeight:`${selectedCityId !== city.cityId ? '54px' : ''}`}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div><input type="radio" name="selectedCity" value={city.cityId} checked={selectedCityId === city.cityId} 
                        style={{ marginRight: '5px', cursor: 'pointer' }} onChange={() => handleCityRadioChange(city.cityId)}/>
                      </div>
                      <div onClick={() => handleCitySelection(city.cityId)} style={{ fontWeight: 'bold', cursor: 'pointer' }}>{city.name}</div>
                    </div>
                    {selectedCityId === city.cityId && (
                      <div style={{ marginTop: '10px' }}>
                        <CityDetails cityId={city.cityId} onClose={handleCloseDetails} />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
        {showPopup && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', 
            zIndex: 10,
          }}>
          <button
            onClick={togglePopup}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              border: 'none',
              background: 'none',
              fontSize: '1em',
              cursor: 'pointer',
            }}
          >
            X
        </button>
            <CityComparison cities={selectedCities}/>
          </div>
        )}
      </div>
    </>
  );
}

export default CityList;
