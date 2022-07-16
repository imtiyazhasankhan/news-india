import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        category: "india",
        searchUrl: null
    }
    static propTypes = {
        category: PropTypes.string,
    }

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            number_of_articles: 12
        }
    }

    // async componentDidMount() {
    //     this.setState({ loading: true })
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }

    async componentDidMount() {
        console.log("this.props.searchUrl: ", this.props.searchUrl, " inside news.js ")
        if ((this.props.searchUrl) === null) {
            this.setState({ loading: true })
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                articles: parsedData.articles,
                loading: false
            })
        }
        //below code will show news that are searched by user
        else {
            this.setState({ loading: true })
            let url = (`${this.props.searchUrl}&pageSize=${this.state.number_of_articles}`)
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                articles: parsedData.articles,
                loading: false
            })
        }


    }

    scroll_to_top = () => {
        window.scrollTo(0, 0)
    }

    // loadMore = async () => {
    //     this.setState({ number_of_articles: this.state.number_of_articles + 12 })
    //     this.setState({ loading: true })
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`

    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }

    loadMore = async () => {
        if ((this.props.searchUrl) === null) {
            this.setState({ number_of_articles: this.state.number_of_articles + 12 })
            this.setState({ loading: true })
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`

            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                articles: parsedData.articles,
                loading: false
            })
        }
        else{
            this.setState({ number_of_articles: this.state.number_of_articles + 12 })
            this.setState({ loading: true })
            // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d16597cdb40841e88f3ff8025f53224a&pageSize=${this.state.number_of_articles}`
            let url = (`${this.props.searchUrl}&pageSize=${this.state.number_of_articles}`)
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                articles: parsedData.articles,
                loading: false
            })
        }

    }


    render() {

        let null_image = 'https://nextjsdev.com/content/images/2021/11/news.png'
        let default_title = "Quo, rem, aliquid maxime itaque commodi cumque asperiores eveniet porro ratione fuga placeat..."
        let default_desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem, aliquid maxime itaque commodi cumque asperiores eveniet porro ratione fuga placeat optio modi qui. A sunt officiis..."

        return (
            <div className="containerOfNewsContainer">
                <h1>Top Headlines</h1>
                <div className='newsContainer'>
                    {this.state.articles.map((element) => {
                        return (
                            <div key={element.url}>
                                <NewsItems
                                    img={element.urlToImage != null ? element.urlToImage : null_image}
                                    title={element.title != null ? element.title.slice(0, 96) + "..." : default_title}
                                    description={element.description != null ? element.description.slice(0, 190) + "..." : default_desc}
                                    newsUrl={element.url} />
                            </div>
                        )

                    })}
                </div>
                <div className="btnContainer">
                    <button type="button" onClick={this.scroll_to_top}>Scroll to top</button>

                    <div className="loadingbtn_and_LoadMore">
                        {/* (this.state.loading &&) it means below div will be shown only if {this.state.loading} condition will be True*/}
                        {this.state.loading &&
                            <div id='loadingDiv'>
                                <div id="circle"></div>
                            </div>}
                        <button type="button" onClick={this.loadMore}>Load More</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
