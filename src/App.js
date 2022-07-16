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

  constructor() {
    super()
    this.state = {
      category: "general",
      key: 'general',
      location: [],
      temp: '',
      country: '',
      feelsLike: "",
      city: null,
      searchUrl: null,
      search: false,
      usrInptVlu: ""
    }
  }



  async componentDidMount() {
    let geoLication = 'https://geolocation-db.com/json/'
    let locationData = await fetch(geoLication)
    let parsedLocation = await locationData.json()
    let currentUserLocation = parsedLocation.IPv4

    let weatherApi = `https://api.weatherapi.com/v1/current.json?key=c8ec5c78e09448f6bce75309220907&q=${currentUserLocation}&aqi=no`
    let data = await fetch(weatherApi)
    let parsedData = await data.json()

    this.setState({
      location: parsedData.location,
      temp: `${parsedData.current.temp_c}°`,
      country: parsedData.location.country,
      city: parsedLocation.city,
      feelsLike: `Feels like ${parsedData.current.feelslike_c}`,
    })
  }

  changeCategory = async () => {
    this.setState({
      category: "entertainment",
      key: "entertainment"
    })
  }


  // _______________Search Function__________________
  onChngFncSrchbr = () => {
    let user_input = `${document.getElementById("searchBox").value}`
    console.log(document.getElementById("searchBox").value)
    let setUserEnteredText = () => {
      this.setState({
        usrInptVlu: user_input.replace(/\s/g,'')
      })
    }
    setUserEnteredText()
    this.setState(
      {
        searchUrl: `https://newsapi.org/v2/everything?q=${this.state.usrInptVlu}&apiKey=d16597cdb40841e88f3ff8025f53224a`,
        search: true
      }
    )
  }


  searchFunc = async () => {
    console.log(this.state.searchUrl, ":Pahle ki value")
    let user_input = `${document.getElementById("searchBox").value}`
    let setUserEnteredText = () => {
      this.setState({
        usrInptVlu: user_input.replace(/\s/g,'')
      })
    }
    setUserEnteredText()

    this.setState(
      {
        searchUrl: `https://newsapi.org/v2/everything?q=${this.state.usrInptVlu}&apiKey=d16597cdb40841e88f3ff8025f53224a`,
        search: true
      }
    )

    console.log("SearchBar closed")
    document.getElementById("navMenus").style.display = "block"
    document.getElementById("searchBox").style.display = "none"
    document.getElementById("searchButton").style.display = "none"
    document.getElementById("searchIcon").style.marginRight = "0px"

    console.log(this.state.searchUrl, " Badd ka text")
    console.log("search:", this.state.search)
  }

  // ______________________End of search func+____________________-



  render() {
    return (

      <BrowserRouter>
        <Navbar title="News-India"
          searchFunction={this.searchFunc}
          userSearch={this.state.usrInptVlu}
          onChngFncSrchbr={this.onChngFncSrchbr} />
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


          {/* ___________For Searching from user___________ */}
          {/* {this.state.search &&
            <Route path={`/${this.state.usrInptVlu}`} element={<News key={"userSearch"} searchUrl={this.state.searchUrl} />}></Route>
          } */}
          <Route path={`/${this.state.usrInptVlu}`} element={<News key={"userSearch"} searchUrl={this.state.searchUrl} />}></Route>

        </Routes>
      </BrowserRouter>
    )
  }
}

