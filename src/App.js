// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Crowsel from './components/Crowsel';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      category: 'india',
    }
  }

  changeCategory = async () => {
    this.setState({
      category: 'entertainment'
    })
    console.log("changeCategory function called")
  }

  render() {
    return (
      <div>
        <Navbar title="News-India" category={this.changeCategory} />
        <div className="container">
          <Crowsel />
          <News category={this.state.category} />
        </div>
      </div>
    )
  }
}

