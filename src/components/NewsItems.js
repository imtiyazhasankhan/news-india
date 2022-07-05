import React, { Component } from 'react'

export class NewsItems extends Component {
    // constructor(){
    //     super()
    //     console.log(' inside NewsItmes.js | Check how much time i am printing')
    // }
    render() {
        let { img, title, description, newsUrl } = this.props
        return (
            <div id='card' className="card rounded-5 m-3">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} className="btn-sm btn btn-primary rounded-5 px-4">Read more</a>
                </div>
            </div>

        )
    }
}

export default NewsItems