import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description, imgurl,newsurl} = this.props;
    return (
      <div>
        <div className="card" style={{width:'20rem'}}>
  <img style={{height:200, objectFit:'cover'}} src={!imgurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5S2Jpeujft-iTKSpPB4SRRudvTdR-MN0TQ&s":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsurl} className="btn btn-smp btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}