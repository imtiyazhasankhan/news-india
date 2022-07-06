// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Crowsel from './components/Crowsel';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      category: "general",
      key: 'general'
    }
  }

   changeCategory = async()=>{
      this.setState({ 
        category: "entertainment",
        key: "entertainment"
      })
      // window.location.reload();
      console.log(this.state.category)
    }


  render() {
    
    return (
      <div>
        <Navbar title="News-India" category={this.changeCategory} />
        <div className="container">
          <Crowsel />
          {/* key={} if components is not mounting after chnageing props, then add unique key  */}
          <News key={this.state.key} category={this.state.category} />
        </div>
      </div>
    )
  }
}

