import React from 'react';

const DishCard = ({ image, name, description, quantity }) => {
  return (
    <div style={cardStyle}>
      {/* Left side with image */}
      <div style={imageContainerStyle}>
        <img src={image} alt={name} style={imageStyle} />
      </div>
      
      {/* Right side with dish info */}
      <div style={infoContainerStyle}>
        <h2 style={dishNameStyle}>{name}</h2>
        <p style={descriptionStyle}>{description}</p>
        <p style={quantityStyle}>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

// Styling for the card
const cardStyle = {
  display: 'flex',
  width: '40%', // Set each card to take 40% of the width
  margin: '20px', // Add some spacing between cards
  backgroundColor: '#f8f8f8', // Background color for the card
  padding: '10px',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add a shadow effect
};

const imageContainerStyle = {
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '10px', // Make the image look nicer
};

const infoContainerStyle = {
  flex: '2',
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const dishNameStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '5px 0',
};

const descriptionStyle = {
  fontSize: '16px',
  color: '#555',
  margin: '5px 0',
};

const quantityStyle = {
  fontSize: '14px',
  color: '#777',
  margin: '5px 0',
};

export default DishCard;
