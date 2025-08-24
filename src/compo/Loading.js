import React, { Component } from 'react'
import loading from './Spinner-3.gif'
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center my-4'>
        <img src={loading} alt="Your news is loading please wait, Thank you." />
      </div>
    )
  }
}
