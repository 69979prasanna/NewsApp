import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'
export default class News extends Component {
  constructor() {
    super();
    console.log("hello")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalresult: 0
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e48f6e1677c84706975cc3ee80feaa7f&page=1&pagesize=3`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({
      articles: parsedata.articles,
      totalresult: parsedata.totalResults,
      loading: false
    })
  }

  handlenext = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalresult / 3))) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e48f6e1677c84706975cc3ee80feaa7f&page=${this.state.page + 1}&pagesize=3`
      this.setState({ loading: true })
      let data = await fetch(url)
      let parsedata = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
        loading: false
      })
    }
  }

  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e48f6e1677c84706975cc3ee80feaa7f&page=${this.state.page - 1}&pagesize=3`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      loading: false
    })
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className='text-center my-3'>NewsApp - Top Headlines</h2>
          <div className="row my-2">
            {this.state.loading && <Loading />}
            {(!this.state.loading && this.state.articles && Array.isArray(this.state.articles)) ? (
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3 d-flex align-items-stretch" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 30) : "No Title"}
                      description={element.description ? element.description.slice(0, 50) : "No Description"}
                      imgurl={element.urlToImage}
                      newsurl={element.url}
                    />
                  </div>
                )
              })
            ) : (
              <p className='text-center'></p>
            )}
          </div>
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr; Previous</button>
          <button disabled={this.state.page + 1 >= Math.ceil(this.state.totalresult / 3)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
News.defaultProps = {
  category: 'general'
}

News.propTypes = {
  category: PropTypes.string,
}