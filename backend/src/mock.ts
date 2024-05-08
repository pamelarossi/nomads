export const cities = [
    { cityId: '1', name: 'New York', country: 'USA' },
  { cityId: '2', name: 'Los Angeles', country: 'USA' },
  { cityId: '3', name: 'Chicago', country: 'USA' },
  { cityId: '4', name: 'Houston', country: 'USA' },
  { cityId: '5', name: 'London', country: 'UK' },
  { cityId: '6', name: 'Manchester', country: 'UK' },
  { cityId: '7', name: 'Paris', country: 'France' },
  { cityId: '8', name: 'Marseille', country: 'France' },
  { cityId: '9', name: 'Berlin', country: 'Germany' },
  { cityId: '10', name: 'Munich', country: 'Germany' },
  { cityId: '11', name: 'Tokyo', country: 'Japan' },
  { cityId: '12', name: 'Osaka', country: 'Japan' },
  { cityId: '13', name: 'Sydney', country: 'Australia' },
  { cityId: '14', name: 'Melbourne', country: 'Australia' },
  { cityId: '15', name: 'Toronto', country: 'Canada' },
  { cityId: '16', name: 'Vancouver', country: 'Canada' },
  { cityId: '17', name: 'Dubai', country: 'UAE' },
  { cityId: '18', name: 'Abu Dhabi', country: 'UAE' },
  { cityId: '19', name: 'Singapore', country: 'Singapore' },
  { cityId: '20', name: 'Hong Kong', country: 'China' },
  ];

export const cityDetails = [
    { 
      cityId: '1', 
      name: 'New York', 
      country: 'USA', 
      costOfLivingIndex: 100, 
      internetSpeed: { download: 100, upload: 50 }, 
      coworkingSpaces: [{ name: 'Coworking Space 1', address: '123 Main St', rating: 4.5 }], 
      safetyIndex: 90, 
      climate: { averageTemperature: 20, rainfall: 1000 }
    },
    { 
      cityId: '2', 
      name: 'Los Angeles', 
      country: 'USA', 
      costOfLivingIndex: 95, 
      internetSpeed: { download: 90, upload: 45 }, 
      coworkingSpaces: [{ name: 'Coworking Space 2', address: '456 Elm St', rating: 4.0 }], 
      safetyIndex: 85, 
      climate: { averageTemperature: 25, rainfall: 500 }
    },
    { 
      cityId: '3', 
      name: 'Chicago', 
      country: 'USA', 
      costOfLivingIndex: 90, 
      internetSpeed: { download: 80, upload: 40 }, 
      coworkingSpaces: [{ name: 'Coworking Space 3', address: '789 Oak St', rating: 4.2 }], 
      safetyIndex: 88, 
      climate: { averageTemperature: 18, rainfall: 800 }
    },
    { 
      cityId: '4', 
      name: 'Houston', 
      country: 'USA', 
      costOfLivingIndex: 85, 
      internetSpeed: { download: 70, upload: 35 }, 
      coworkingSpaces: [{ name: 'Coworking Space 4', address: '101 Pine St', rating: 4.3 }], 
      safetyIndex: 82, 
      climate: { averageTemperature: 28, rainfall: 1200 }
    },
    { 
      cityId: '5', 
      name: 'London', 
      country: 'UK', 
      costOfLivingIndex: 95, 
      internetSpeed: { download: 80, upload: 40 }, 
      coworkingSpaces: [{ name: 'Coworking Space 5', address: '12 High St', rating: 4.1 }], 
      safetyIndex: 87, 
      climate: { averageTemperature: 15, rainfall: 700 }
    },
    { 
      cityId: '6', 
      name: 'Manchester', 
      country: 'UK', 
      costOfLivingIndex: 90, 
      internetSpeed: { download: 70, upload: 35 }, 
      coworkingSpaces: [{ name: 'Coworking Space 6', address: '34 Low St', rating: 4.0 }], 
      safetyIndex: 85, 
      climate: { averageTemperature: 13, rainfall: 900 }
    },
    { 
      cityId: '7', 
      name: 'Paris', 
      country: 'France', 
      costOfLivingIndex: 85, 
      internetSpeed: { download: 60, upload: 30 }, 
      coworkingSpaces: [{ name: 'Coworking Space 7', address: '56 Rue St', rating: 4.4 }], 
      safetyIndex: 83, 
      climate: { averageTemperature: 20, rainfall: 600 }
    },
    { 
      cityId: '8', 
      name: 'Marseille', 
      country: 'France', 
      costOfLivingIndex: 80, 
      internetSpeed: { download: 50, upload: 25 }, 
      coworkingSpaces: [{ name: 'Coworking Space 8', address: '78 Avenue St', rating: 4.3 }], 
      safetyIndex: 80, 
      climate: { averageTemperature: 22, rainfall: 800 }
    },
    { 
      cityId: '9', 
      name: 'Berlin', 
      country: 'Germany', 
      costOfLivingIndex: 85, 
      internetSpeed: { download: 60, upload: 30 }, 
      coworkingSpaces: [{ name: 'Coworking Space 9', address: '90 Haupt St', rating: 4.2 }], 
      safetyIndex: 85, 
      climate: { averageTemperature: 17, rainfall: 700 }
    },
    { 
      cityId: '10', 
      name: 'Munich', 
      country: 'Germany', 
      costOfLivingIndex: 90, 
      internetSpeed: { download: 70, upload: 35 }, 
      coworkingSpaces: [{ name: 'Coworking Space 10', address: '123 Platz St', rating: 4.1 }], 
      safetyIndex: 88, 
      climate: { averageTemperature: 20, rainfall: 600 }
    },
    { 
      cityId: '11', 
      name: 'Tokyo', 
      country: 'Japan', 
      costOfLivingIndex: 100, 
      internetSpeed: { download: 100, upload: 50 }, 
      coworkingSpaces: [{ name: 'Coworking Space 11', address: '1 Ginza St', rating: 4.5 }], 
      safetyIndex: 90, 
      climate: { averageTemperature: 25, rainfall: 1200 }
    },
    { 
      cityId: '12', 
      name: 'Osaka', 
      country: 'Japan', 
      costOfLivingIndex: 95, 
      internetSpeed: { download: 90, upload: 45 }, 
      coworkingSpaces: [{ name: 'Coworking Space 12', address: '2 Umeda St', rating: 4.4 }], 
      safetyIndex: 88, 
      climate: { averageTemperature: 22, rainfall: 1100 }
    },
    { 
      cityId: '13', 
      name: 'Sydney', 
      country: 'Australia', 
      costOfLivingIndex: 95, 
      internetSpeed: { download: 90, upload: 45 }, 
      coworkingSpaces: [{ name: 'Coworking Space 13', address: '3 Bondi St', rating: 4.3 }], 
      safetyIndex: 88, 
      climate: { averageTemperature: 22, rainfall: 900 }
    },
    { 
      cityId: '14', 
      name: 'Melbourne', 
      country: 'Australia', 
      costOfLivingIndex: 90, 
      internetSpeed: { download: 80, upload: 40 }, 
      coworkingSpaces: [{ name: 'Coworking Space 14', address: '4 Fitzroy St', rating: 4.2 }], 
      safetyIndex: 85, 
      climate: { averageTemperature: 20, rainfall: 1000 }
    },
    { 
      cityId: '15', 
      name: 'Toronto', 
      country: 'Canada', 
      costOfLivingIndex: 90, 
      internetSpeed: { download: 80, upload: 40 }, 
      coworkingSpaces: [{ name: 'Coworking Space 15', address: '5 Yonge St', rating: 4.1 }], 
      safetyIndex: 85, 
      climate: { averageTemperature: 18, rainfall: 800 }
    },
    { 
      cityId: '16', 
      name: 'Vancouver', 
      country: 'Canada', 
      costOfLivingIndex: 85, 
      internetSpeed: { download: 70, upload: 35 }, 
      coworkingSpaces: [{ name: 'Coworking Space 16', address: '6 Granville St', rating: 4.0 }], 
      safetyIndex: 82, 
      climate: { averageTemperature: 15, rainfall: 1200 }
    },
    { 
      cityId: '17', 
      name: 'Dubai', 
      country: 'UAE', 
      costOfLivingIndex: 100, 
      internetSpeed: { download: 100, upload: 50 }, 
      coworkingSpaces: [{ name: 'Coworking Space 17', address: '7 Sheikh Zayed Rd', rating: 4.6 }], 
      safetyIndex: 90, 
      climate: { averageTemperature: 35, rainfall: 100 }
    },
    { 
      cityId: '18', 
      name: 'Abu Dhabi', 
      country: 'UAE', 
      costOfLivingIndex: 95, 
      internetSpeed: { download: 90, upload: 45 }, 
      coworkingSpaces: [{ name: 'Coworking Space 18', address: '8 Corniche Rd', rating: 4.5 }], 
      safetyIndex: 88, 
      climate: { averageTemperature: 30, rainfall: 150 }
    },
    { 
      cityId: '19', 
      name: 'Singapore', 
      country: 'Singapore', 
      costOfLivingIndex: 95, 
      internetSpeed: { download: 90, upload: 45 }, 
      coworkingSpaces: [{ name: 'Coworking Space 19', address: '9 Marina Bay Sands', rating: 4.4 }], 
      safetyIndex: 88, 
      climate: { averageTemperature: 28, rainfall: 200 }
    },
    { 
      cityId: '20', 
      name: 'Hong Kong', 
      country: 'China', 
      costOfLivingIndex: 90, 
      internetSpeed: { download: 80, upload: 40 }, 
      coworkingSpaces: [{ name: 'Coworking Space 20', address: '10 Victoria Harbour', rating: 4.3 }], 
      safetyIndex: 85, 
      climate: { averageTemperature: 25, rainfall: 300 }
    },
  ];