import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CityList from '../CityList';
import CityDetails from '../CityDetails';

// Mock CityDetails component
jest.mock('../CityDetails', () => ({ cityId, onClose }: { cityId: string; onClose: () => void }) => (
  <div data-testid="city-details">
    <button data-testid="close-button" onClick={onClose}>Close</button>
    City Details for {cityId}
  </div>
));

// Mock city data
const cities = [
  { cityId: '1', name: 'City 1', country: 'Country A' },
  { cityId: '2', name: 'City 2', country: 'Country B' }
];

test('City details are shown when radio button is clicked', () => {
  // Render CityList component with mock city data
  const { getByLabelText, queryByTestId } = render(<CityList cities={cities} />);

  // Get the radio buttons for both cities
  const radioButtonCity1 = getByLabelText('City 1');
  const radioButtonCity2 = getByLabelText('City 2');

  // Click the radio button for City 1
  fireEvent.click(radioButtonCity1);

  // Assert that CityDetails component for City 1 is rendered
  expect(queryByTestId('city-details')).toBeInTheDocument();
  
  // Click the radio button for City 2
  fireEvent.click(radioButtonCity2);

  // Assert that CityDetails component for City 2 is rendered
  expect(queryByTestId('city-details')).toBeInTheDocument();
});

test('onClose is called when close button is clicked', () => {
  // Mock onClose function
  const onCloseMock = jest.fn();

  // Render CityDetails component with mock city data
  const { getByTestId } = render(<CityDetails cityId="1" onClose={onCloseMock} />);

  // Get the close button
  const closeButton = getByTestId('close-button');

  // Click the close button
  fireEvent.click(closeButton);

  // Assert that onClose function is called
  expect(onCloseMock).toHaveBeenCalled();
});
