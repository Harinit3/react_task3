import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick a color</button>
      {isColorListVisible && (
        <div>
          <p>Select a color:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => handleColorClick(color)}
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: color,
                  margin: '5px',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      )}
      {selectedColor && <p>You selected: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
