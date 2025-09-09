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
          <Route exact path="/" element={<News category="general" />} /> 
          <Route exact path="/health" element={<News category="health" />} /> 
          <Route exact path="/business" element={<News category="business" />} /> 
          <Route exact path="/science" element={<News category="science" />} /> 
          <Route exact path="/sports" element={<News category="sports" />} /> 
          <Route exact path="/entertainment" element={<News category="entertainment" />} /> 
          <Route exact path="/technology" element={<News  category="technology" />} /> 
          <Route exact path="/anime" element={<News  category="anime" />} /> 
        </Routes>
        </HashRouter>
      </div>
    )
  }
}
