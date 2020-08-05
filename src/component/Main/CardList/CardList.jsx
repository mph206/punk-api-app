import React, { Component } from 'react';
import styles from './CardList.module.scss';
import Card from './Card'

class CardList extends Component {
    state = {
        beers: [],
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(response => response.json())
        .then(response => this.setState({beers: response}))
        .catch(error => console.log(error))
    }
    
    filterCheckbox = (filterProp, filterParam) => {
       if (filterProp) {
            return filterParam;
        } else {
            return true;
        }
    }

    filterBySearch = (filterProp, filterParam) => {
        return filterParam.name.toUpperCase().includes(filterProp)
        || filterParam.tagline.toUpperCase().includes(filterProp)
        || filterParam.abv.toString().includes(filterProp)
        || filterParam.description.toUpperCase().includes(filterProp)
    }

    filter = () => {
        return this.state.beers
            .filter((beer) => {return (
                this.filterCheckbox(this.props.highAlcoholOnly, beer.abv > 6)
                && this.filterCheckbox(this.props.classicRangeOnly, (parseInt(beer.first_brewed.split('/').pop()) < 2010) )
                && this.filterCheckbox(this.props.highAcidityOnly, beer.ph < 4)
                && this.filterBySearch(this.props.searchTerm.toUpperCase(), beer)
                )})
            .map((beer) => <Card data={beer} key={beer.id} />)
    }    

    render() { 
        return (
            <section className={styles.CardList}>
                {this.filter()}
            </section>
          );
    }
}
 
export default CardList;
