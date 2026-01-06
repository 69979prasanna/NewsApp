import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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
    if  (prevProps.category !== this.props.category) {
      this.fetchNews(1)
    }
  }

  fetchNews = async (pageNo) => {
  this.setState({ loading: true, page: pageNo });
  let url;
  
    url = `http://localhost:3000/api/news?q=${this.props.category}&page=${pageNo}`;

  let data = await fetch(url);
  let parsedata = await data.json();
let newArticles = Array.isArray(parsedata.articles) ? parsedata.articles : [];
  this.setState((prevState) => ({
    articles: pageNo === 1 
      ? newArticles
      : [...prevState.articles, ...newArticles], 
    totalresult: parsedata.totalResults || newArticles,
    loading: false
  }));
};
fetchMoreData = async () => {
  this.setState({ page: this.state.page + 1 }, () => {
    this.fetchNews(this.state.page);  
  });
}

  render() {
    console.log("Props in News:", this.props) 
    return (
      <div>
        <div className="container my-3">
          <h2 className='text-center my-3'>NewsApp - Top Headlines</h2>
              <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={this.state.loading && <Loading />}
        >
          <div className="container">

              {this.state.loading && <Loading />}
           <div className="row my-2">
       
            {( this.state.articles && Array.isArray(this.state.articles)) ? (
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
 </InfiniteScroll>
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