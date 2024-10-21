import React from 'react';
import TwoMainLayouts from './Components/MainLayout'; // Import TwoMainLayouts

function App() {
  // Define the dishes data here
  const dishes1 = [
    {
      image: 'https://example.com/dish1.jpg',
      name: 'Dish 1',
      description: 'A delicious dish.',
      quantity: 5,
    },
    {
      image: 'https://example.com/dish2.jpg',
      name: 'Dish 2',
      description: 'A mouth-watering dish.',
      quantity: 3,
    },
    {
      image: 'https://example.com/dish3.jpg',
      name: 'Dish 3',
      description: 'A savory dish.',
      quantity: 2,
    },
    {
      image: 'https://example.com/dish4.jpg',
      name: 'Dish 4',
      description: 'A tasty dish.',
      quantity: 4,
    },
    {
      image: 'https://example.com/dish5.jpg',
      name: 'Dish 5',
      description: 'A popular dish.',
      quantity: 1,
    },
    {
      image: 'https://example.com/dish6.jpg',
      name: 'Dish 6',
      description: 'A delightful dish.',
      quantity: 6,
    },
    {
      image: 'https://example.com/dish7.jpg',
      name: 'Dish 7',
      description: 'A rich dish.',
      quantity: 8,
    },
    {
      image: 'https://example.com/dish8.jpg',
      name: 'Dish 8',
      description: 'A wonderful dish.',
      quantity: 7,
    },
  ];

  // Define a second set of dishes if you want
  const dishes2 = [
    /* Another array of 8 dishes */
  ];

  return (
    <div>
      <header>
        <h1>Welcome to Our Restaurant</h1>
      </header>

      {/* Pass the dishes data to TwoMainLayouts */}
      <TwoMainLayouts dishSet1={dishes1} dishSet2={dishes2} />
    </div>
  );
}

export default App;
