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
import Weather from './components/Weather';

export default class App extends Component {
  location_ = []
  currentUserLocation = ""
  feelsLike = "Chill"

  constructor() {
    super()
    this.state = {
      category: "general",
      key: 'general',
      location: this.location_,
      temp: '',
      country: '',
      feelsLike: this.feelsLike,
      city: null,
      currentUserLocation: this.currentUserLocation
    }
  }

  async componentDidMount() {
    let weatherApi = `https://api.weatherapi.com/v1/current.json?key=c8ec5c78e09448f6bce75309220907&q=${this.state.currentUserLocation}'&aqi=no`
    let data = await fetch(weatherApi)
    let parsedData = await data.json()
    let geoLication = 'https://geolocation-db.com/json/'
    let locationData = await fetch(geoLication)
    let parsedLocation = await locationData.json()
    this.setState({
      location: parsedData.location,
      temp: `${parsedData.current.temp_c}°`,
      country: parsedData.location.country,
      city: parsedLocation.city,
      feelsLike: `Feels like ${parsedData.current.feelslike_c}`,
      currentUserLocation: parsedLocation.IPv4
    })
  }

  changeCategory = async () => {
    this.setState({
      category: "entertainment",
      key: "entertainment"
    })
    console.log(this.state.category)
  }

  // searchFunc = ()=>{
  //   let userInputValue = document.getElementById("searchBox").value
  //   console.log(userInputValue)
  // }


  render() {  
    return (
          
          <BrowserRouter>
            <Navbar title="News-India"/>
            <Weather 
              temp={this.state.temp} 
              city={this.state.city} 
              country={this.state.country} 
              feelsLike={this.state.feelsLike}
            />
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
  }
}

