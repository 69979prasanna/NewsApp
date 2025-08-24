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
  render() {
    return (
      <div>
        <HashRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/About" element={<About />} />
          <Route exact path="/" element={<News key={'general'} category="general" />} /> 
          <Route exact path="/health" element={<News key={'health'} category="health" />} /> 
          <Route exact path="/business" element={<News key={'business'} category="business" />} /> 
          <Route exact path="/science" element={<News key={'science'} category="science" />} /> 
          <Route exact path="/sports" element={<News key={'sports'} category="sports" />} /> 
          <Route exact path="/entertainment" element={<News key={'entertainment'} category="entertainment" />} /> 
          <Route exact path="/technology" element={<News key={'technology'} category="technology" />} /> 
        </Routes>
    
        </HashRouter>
      </div>
    )
  }
}
