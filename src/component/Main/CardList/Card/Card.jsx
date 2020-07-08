import React, { Component } from 'react';
import styles from './Card.module.scss';

class Card extends Component {
    state = {  }
    render() { 
        const { name, description, tagline, image_url, abv, ph, first_brewed, ingredients } = this.props.data;

        
        let ingredientsList = () => {
            let ingredientArray = []
            for (let key in this.props.data.ingredients) {
                // Using [key] here doesn't work but using .malt does, because not all the ingredients are objects (yeast is just a key value pair)
                console.log(key);
                let subIngredients = ingredients[key].map(item => item.name);
                key += `(${subIngredients.join(', ')})`;
                ingredientArray.push(key);
            }
            console.log(ingredientArray)
            return ingredientArray.join(', ');
        }
        
        return (
        <div className={styles.Card}>
            <img src={image_url} alt={tagline}/>
            <h2>{name}</h2>
            <p className={styles.tagline}>{tagline}</p>
            <p>ABV: {abv}% | pH: {ph} | Since: {first_brewed}</p>
            <p>{description}</p>
            {/* <p>Ingredients: {ingredientsList()}</p> */}
            {/* Could make a function here that I pass malt or hops into */}
            <p>Ingredients: malts ({ingredients.malt.map(item => item.name).join(', ')}), hops({ingredients.hops.map(item => item.name).join(', ')}), yeast</p>   
        </div>
         );
    }
}
 
export default Card;