import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'


export class News extends Component {
    articles = []
    
    static defaultProps = {
        category: "india"
    }
    static propTypes = {
        category: PropTypes.string
    }


    constructor() {
        super()
        // console.log('inside News.js Check how much time i am printing')
        this.state = {
            articles: this.articles,
            loading: false,
            number_of_articles: 12
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        // let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`

        // newURL
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
    }

    scroll_to_top = () => {
        window.scrollTo(0, 0)
    }
    loadMore = async () => {
        this.setState({ number_of_articles: this.state.number_of_articles + 12 })
        this.setState({ loading: true })

        // let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`

        // newURL
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`

        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
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
                <div className="d-flex justify-content-between my-5 px-4">
                    <button type="button" className="btn btn-primary rounded-5 px-4" onClick={this.scroll_to_top}>Scroll to top</button>

                    <div className="d-flex">
                        {/* (this.state.loading &&) it means below div will be shown only if {this.state.loading} condition will be True*/}
                        {this.state.loading &&
                            <div id='loadingDiv' className="d-flex mx-3">
                                <div id="circle"></div>
                            </div>}
                        <button type="button" className="btn btn-primary rounded-5 px-4" onClick={this.loadMore}>Load More</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News