import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'

export default class  extends Component {
  a="Johnny"
  render() {
    return (
      <div>
          <Navbar/>
          <News/>
      </div>
    )
  }
}







