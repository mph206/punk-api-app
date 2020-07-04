import React, { Component } from 'react';
import styles from './SearchBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchBox extends Component {
    render() { 
        return (
        <section className={styles.SearchBox}>
           <div>
                <input type='text' onChange={this.props.handleSearch} id='search'/>
                <label htmlFor="search">
                    <FontAwesomeIcon icon={faSearch}/>
                </label>
           </div>
            <p>Search by name, tagline, description or ABV</p>
        </section>);
    }
}
 
export default SearchBox;