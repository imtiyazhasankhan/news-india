// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Crowsel from './components/Crowsel';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      category: "general",
      key: 'general'
    }
  }

  changeCategory = async () => {
    this.setState({
      category: "entertainment",
      key: "entertainment"
    })
    console.log(this.state.category)
  }


  render() {
    return (
          
          <BrowserRouter>
            <Navbar title="News-India" />
            {/* <Crowsel /> */}
            <Routes>
              <Route path="/" element={<News key={"general"} category={"general"} />}></Route>
              <Route path="/technology" element={<News key={"technology"} category={"technology"} />}></Route>
              <Route path="/science" element={<News key={"science"} category={"science"} />}></Route>
              <Route path="/sports" element={<News key={"sports"} category={"sports"} />}></Route>
              <Route path="/health" element={<News key={"health"} category={"health"} />}></Route>
              <Route path="/entertainment" element={<News key={"entertainment"} category={"entertainment"} />}></Route>
            </Routes>
          </BrowserRouter>
    )

    // return (
    //   <div>
    //     <Navbar title="News-India" category={this.changeCategory} />
    //     <div className="container">
    //       <Crowsel />
    //       {/* key={} if components is not mounting after chnageing props, then add unique key  */}
    //       <News key={this.state.key} category={this.state.category} />
    //     </div>
    //   </div>
    // )

  }
}

