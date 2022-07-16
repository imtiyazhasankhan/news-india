import React, { Component } from 'react'

export default class Crowsel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://nextjsdev.com/content/images/2021/11/news.png" className="rounded-5 d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.mos.cms.futurecdn.net/abrjxh72WUo4ehNhxeL4LD-1200-80.jpeg" className="rounded-5 d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://static01.nyt.com/images/2021/09/10/obituaries/00Brook-01/00Brook-01-facebookJumbo.jpg" className="rounded-5 d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        )
    }
}
