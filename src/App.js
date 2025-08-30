import './App.css';
import React, { Component } from 'react'
import Navbar from './compo/Navbar';
import News from './compo/News';
import About from './compo/About';
import{
  HashRouter,
  Routes,
  Route,
  }from "react-router-dom"
  export default class App extends Component {
    state = {
      country:"us"
    }
    setCountry = (newCountry) =>{
      this.setState({country:newCountry})
    }
  render() {
    return (
      <div>
        <HashRouter>
        <Navbar setCountry={this.setCountry}/>
        <Routes>
          <Route exact path="/About" element={<About />} />
          <Route exact path="/" element={<News country={this.state.country}  category="general" />} /> 
          <Route exact path="/health" element={<News country={this.state.country} category="health" />} /> 
          <Route exact path="/business" element={<News country={this.state.country} category="business" />} /> 
          <Route exact path="/science" element={<News country={this.state.country} category="science" />} /> 
          <Route exact path="/sports" element={<News country={this.state.country} category="sports" />} /> 
          <Route exact path="/entertainment" element={<News country={this.state.country}  category="entertainment" />} /> 
          <Route exact path="/technology" element={<News country={this.state.country}  category="technology" />} /> 
        </Routes>
        </HashRouter>
      </div>
    )
  }
}
