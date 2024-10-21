import React from 'react';
import DishCard from './DishCard'; // Import the DishCard component

const dishes = [
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

const MainLayout = ({ dishSet }) => {
  return (
    <div style={mainContainerStyle}>
      {/* Left side column */}
      <div style={columnStyle}>
        {dishSet.slice(0, 4).map((dish, index) => (
          <DishCard
            key={index}
            image={dish.image}
            name={dish.name}
            description={dish.description}
            quantity={dish.quantity}
          />
        ))}
      </div>

      {/* Right side column */}
      <div style={columnStyle}>
        {dishSet.slice(4).map((dish, index) => (
          <DishCard
            key={index}
            image={dish.image}
            name={dish.name}
            description={dish.description}
            quantity={dish.quantity}
          />
        ))}
      </div>
    </div>
  );
};

// Styling for the main container
const mainContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%', // 80% width for the entire layout
  margin: '0 auto', // Center the container horizontally
  flexWrap: 'wrap',
};

const columnStyle = {
  width: '50%', // Each column takes 50% of the width
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Align cards in the center of each column
};

const TwoMainLayouts = () => {
  return (
    <div>
      {/* First Main Layout */}
      <h1>Main Layout 1</h1>
      <MainLayout dishSet={dishes} />

      {/* Second Main Layout */}
      <h1>Main Layout 2</h1>
      <MainLayout dishSet={dishes} />
    </div>
  );
};

export default TwoMainLayouts;
