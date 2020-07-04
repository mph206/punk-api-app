import React, { Component } from 'react';
import styles from './App.module.scss';
import beers from './data/beers';
import Main from './component/Main';
import Navbar from './component/Navbar';

export default class App extends Component {

  state = {
    searchTerm: '',
    highAlcoholOnly: false,
    classicRangeOnly: false,
    highAcidityOnly: false,
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  filterClassic = () => {
    this.setState({
      classicRangeOnly: !this.state.classicRangeOnly,
    })
  }

  filterABV = () => {
    this.setState({
      highAlcoholOnly: !this.state.highAlcoholOnly,
    })
  }

  filterAcidic = () => {
    this.setState({
      highAcidityOnly: !this.state.highAcidityOnly,
    })
  }
  
  render() {
    const {highAlcoholOnly, classicRangeOnly, highAcidityOnly, searchTerm } = this.state;
    return (
      <main className={styles.app}>
        <Navbar handleSearch={this.handleSearch} filterABV={this.filterABV} filterClassic={this.filterClassic} filterAcidic={this.filterAcidic} />
        <Main highAlcoholOnly={highAlcoholOnly} classicRangeOnly={classicRangeOnly} highAcidityOnly={highAcidityOnly} searchTerm={searchTerm} data={beers} />
      </main>
    )
    ;
  }
}