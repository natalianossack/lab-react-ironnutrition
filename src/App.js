import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';
import { useState } from 'react';

function App() {
  return (
    <div className="App">

      <FoodBox />
    </div>
  );
}

export default App;
