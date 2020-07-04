import React, { Component } from 'react';
import styles from './FiltersList.module.scss';
import FilterItem from './FilterItem';

class FiltersList extends Component {
    state = {  }
    render() { 
        return (
            <div className={styles.FiltersList}>
            <p>Show only:</p>
            <FilterItem text={'ABV over 6%'} value={'highABV'} onClick={this.props.filterABV}/>
            <FilterItem text={'Classic Range'} value={'classicRange'} onClick={this.props.filterClassic}/>
            <FilterItem text={'Acidic (pH < 4)'} value={'acidic'} onClick={this.props.filterAcidic}/>
        </div>);
    }
}
 
export default FiltersList;