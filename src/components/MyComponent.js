import React from "react";

class MyComponent extends React.Component {
    render() {
        let pizza = {
            name: 'Pizza',
            ingredients: ['Tomatoes', 'Chicken', 'Cheese', 'Olives'],
            calories: 400
        }
        return <div>
            <h2>This is my first component in React</h2>
            <hr/>

            <h3>{'Food: ' + pizza.name}</h3>

            <h4>{'Calories: ' + pizza.calories + ' kcal'}</h4>
            <ul>
                <h3>Ingredients</h3>
                {pizza.ingredients.map((ingredient) => <li>{ingredient}</li>)}
            </ul>
        </div>
    }

}

export default MyComponent;