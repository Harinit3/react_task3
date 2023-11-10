// App.js
import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['red','chartreuse', 'blue','yellow','fuchsia ','aqua','darkorange','green', 'purple','lightpink','forestgreen','lightsalmon','turquoise','sienna','orange ','dodgerblue ','gold '];

  return (
    <div style={{ backgroundColor: 'violet', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'pink', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center' }}>Color Picker App</h1>
        <ColorPicker colors={colors} />
      </div>
    </div>
  );
};

export default App;
