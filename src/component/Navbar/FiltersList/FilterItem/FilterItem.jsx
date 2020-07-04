import React, { Component } from 'react';
import styles from './FilterItem.module.scss';

class FilterItem extends Component {
    state = {  }
    render() { 
        return (
        <div className={styles.FilterItem}>
          <label htmlFor={this.props.value}>{this.props.text}</label>
          <input type="checkbox" value={this.props.value} id={this.props.value} onClick={this.props.onClick}/>
        </div>);
    }
}
 
export default FilterItem;