//<FoodBox food={ {
 // name: "Orange",
 // calories: 85,
 // image: "https://i.imgur.com/abKGOcv.jpg",
 // servings: 1
//}} />

function FoodBox ({food, deleteFunc}){
return (<div className= 'FoodBox'>
    <h3>{food.name}</h3>
    <p>calories:{food.calories}</p>
    <img src="https://i.imgur.com/abKGOcv.jpg" alt="Comida"/>
    <p>servings: {food.servings}</p>
    <button onClick={() => deleteFunc(food._id)} className='btn-delete'>Delete</button>
</div>
)
}

export default FoodBox;
