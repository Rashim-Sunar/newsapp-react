import React, { Component } from 'react'
import spiner from './loading.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
            <img src={spiner} alt="Loading"/>
      </div>
    )
  }
}

export default Loading
