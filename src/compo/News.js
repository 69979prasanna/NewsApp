import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalresult: 0
    }
  }

  async componentDidMount() {
    this.fetchNews(1)
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country || prevProps.category !== this.props.category) {
      this.fetchNews(1)
    }
  }

  fetchNews = async (pageNo) => {
    this.setState({ loading: true, page: pageNo })
    let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=3&apikey=3b99c7838d1c1477550b4c7ae80ff9a6&page=${pageNo}&pageSize=3`
    
  if (this.props.category === 'anime') {
    url = `https://gnews.io/api/v4/search?q=anime&lang=en&country=${this.props.country}&max=3&apikey=3b99c7838d1c1477550b4c7ae80ff9a6&page=${pageNo}&pageSize=3`;
  } else {
    url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=3&apikey=3b99c7838d1c1477550b4c7ae80ff9a6&page=${pageNo}&pageSize=3`;
  }
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({
      articles: parsedata.articles,
      totalresult: parsedata.totalResults,
      loading: false
    })
  }

  handlenext = () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalresult / 3))) {
      this.fetchNews(this.state.page + 1)
    }
  }

  handleprev = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1)
    }
  }

  render() {
    console.log("Props in News:", this.props) 
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
                      imgurl={element.image}
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
  country: PropTypes.string.isRequired
}