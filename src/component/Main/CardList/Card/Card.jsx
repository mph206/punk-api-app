import React, { Component } from 'react';
import styles from './Card.module.scss';

class Card extends Component {
    state = {  }
    render() { 
        const { name, description, tagline, image_url, abv, ph, first_brewed, ingredients } = this.props.data;
        
        return (
        <div className={styles.Card}>
            <img src={image_url} alt={tagline}/>
            <h2>{name}</h2>
            <p className={styles.tagline}>{tagline}</p>
            <p>ABV: {abv}% | pH: {ph} | Since: {first_brewed}</p>
            <p>{description}</p>
            <p>Ingredients: malts ({ingredients.malt.map(item => item.name).join(', ')}), hops({ingredients.hops.map(item => item.name).join(', ')}), yeast</p>   
        </div>
         );
    }
}
 
export default Card;