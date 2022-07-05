import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    article = []

    constructor() {
        super()
        console.log('inside News.js Check how much time i am printing')
        this.state = {
            articles: this.article,
            loading: false,
            number_of_articles : 12
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
        })
    }

    scroll_to_top = ()=>{
        window.scrollTo(0, 0)
    }
    next = async()=>{
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
        })
       this.setState({ number_of_articles: this.state.number_of_articles+12 })
       console.log("nexxxxxxxxt")
    }


    render() {

        let null_image = 'https://nextjsdev.com/content/images/2021/11/news.png'
        let default_title = "Lorem ipsum dolor sit amet consectetur."
        let default_desc = "amet consectetur adipisicing elit. Nisi voluptatum quae velit hic, recusandae necessitatibus est, labore illum alias, non doloremque nesciunt. Id nulla quos vel rem explicabo ipsum nemo?"

        return (
            <>
                <div className='container newsContainer mt-5'>
                    {this.state.articles.map((element) => {
                        return (
                            <div key={element.url}>
                                <NewsItems
                                    img={element.urlToImage != null ? element.urlToImage : null_image}
                                    title={element.title != null ? element.title : default_title}
                                    description={element.description != null ? element.description : default_desc}
                                    newsUrl={element.url}
                                />
                            </div>
                        )

                    })}
                </div>
                <div className="d-flex justify-content-between my-5 px-4 bg-light">
                    <button type="button" className="btn btn-primary rounded-5 px-4" onClick={this.scroll_to_top}>Scroll to top</button>
                    <button type="button" className="btn btn-primary rounded-5 px-4" onClick={this.next}>Load More</button>
                </div>
            </>
        )
    }
}

export default News