import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getCode} from 'country-list'
export default class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput:""
    }
  }
  handleSearch = (e) =>{
    e.preventDefault()
    const code = getCode(this.state.searchInput.trim())
    if(code){
      this.props.setCountry(code.toLowerCase())
      this.setState({searchInput:""})
    }
    else{
      alert("Invalid country name, try again!")
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/business">Business</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
            <li><Link className="dropdown-item" to="/anime">Anime</Link></li>
          </ul>
        </li>
      </ul>
        <form className="d-flex" role="search" onSubmit={this.handleSearch}>
      <input className="form-control me-2" type="search" placeholder="Country" aria-label="Search" value={this.state.searchInput} onChange={(e)=> this.setState({searchInput: e.target.value})}/>
      <button className="btn btn-outline-primary" type="submit">search</button>
    </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
