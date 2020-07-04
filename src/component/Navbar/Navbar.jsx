import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import SearchBox from './SearchBox';
import FiltersList from './FiltersList';


class Navbar extends Component {
  
    render() { 
        const { handleSearch, filterABV, filterClassic, filterAcidic } = this.props;

        return (
            <>
                <section className={styles.navBar}>
                    <h1>Beer Browser with Punk API</h1>
                <SearchBox handleSearch={handleSearch}/>
                <FiltersList filterABV={filterABV} filterClassic={filterClassic} filterAcidic={filterAcidic}/>
                </section>
            </>
    );
    }
}
 
export default Navbar;