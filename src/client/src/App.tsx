import React from 'react';

const App = () => {
  console.log(process.env.NODE_ENV);
  return <h1>Now, the mode is {process.env.NODE_ENV}</h1>;
}

export default App;