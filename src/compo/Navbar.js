import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
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
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/business">Business</Link></li>
            <li><Link class="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link class="dropdown-item" to="/health">Health</Link></li>
            <li><Link class="dropdown-item" to="/science">Science</Link></li>
            <li><Link class="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link class="dropdown-item" to="/technology">Technology</Link></li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
