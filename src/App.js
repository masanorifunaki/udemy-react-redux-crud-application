import React from 'react';

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meo!</div>
};

export default App;
