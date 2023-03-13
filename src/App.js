
import { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Divider} from 'antd';

import foods from './foods.json';
import './App.css';

import FoodBox from './components/FoodBox.js';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const addFood = (foodObj) => {
    const foodListCopy = [...foodList, foodObj];
    setFoodList(foodListCopy);
  }

  const filterList = (str) => {
    const filteredList = foodList.filter(food => {
      return food.name.toLowerCase().includes(str.toLowerCase());
    })
    setFilteredFoodList(filteredList);
  }

  const deleteFood = (name) => {
const filteredList =foodList.filter(food =>{
  return food.name !== name;
})
setFoodList (filteredList);

const filteredRenderList = filteredFoodList.filter(food =>{
  return food.name !== name;
  })
  setFilteredFoodList(filteredRenderList);
}


  return (
    <div className="App">
      <AddFoodForm addFood={addFood}/>

      <Search filterList ={filterList}/>

      <Divider>Food List</Divider>
      {filteredFoodList.length===0 
      ? <div> Ooops, There's no more content to show.</div>
      : filteredFoodList.map((food) => {
        return <FoodBox key={uuidv4()} food={food} deleteFood={deleteFood}/>;
      })}
    </div>
  );
}

export default App;
