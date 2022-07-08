import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div className="weather">
        <div className="wLeft">
            <div className="weatherInfoContainer">
                <div id="temp">36°</div>
                <div className="locationAndMoreContainer">
                    <div className="wInf">Partly cloudy</div>
                    <div className="location">New Delhi, India</div>
                </div>
            </div>
        </div>
        <div className="wRight">
            <div className="sooraj"></div>
        </div>
        <div className="cloud"></div>
        <div className="cloud1"></div>
      </div>
    )
  }
}