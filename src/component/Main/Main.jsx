import React, { Component } from 'react';
import styles from './Main.module.scss';
import CardList from './CardList'

class Main extends Component {
    state = {  }
    render() { 
        const {highAlcoholOnly, classicRangeOnly, highAcidityOnly, searchTerm } = this.props;
        return (<CardList className={styles.main} highAlcoholOnly={highAlcoholOnly} classicRangeOnly={classicRangeOnly} highAcidityOnly={highAcidityOnly} searchTerm={searchTerm} />);
    }
}
 
export default Main;