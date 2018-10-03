import React from 'react';
import colorTesting from '../src/utils/colorTesting';

const Index = () => {
  const test = colorTesting();
  console.log(test);

  return (
    <div>Hex Naw!</div>
  );
};

export default Index;

// export default () => <div>Welcome to next.js</div>;
