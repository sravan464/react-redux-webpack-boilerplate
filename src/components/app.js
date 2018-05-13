import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div>
        <div className='alert alert-success' role='alert'>
          <strong>Warning!</strong> <a href='#' className='alert-link' />
        </div>
        <button className='btn btn-outline-success'>place holder</button>
      </div>
    )
  }
}
