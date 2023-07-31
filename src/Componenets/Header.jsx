import React, { Component } from 'react'
import './../Styles/header.css'
class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }
  render() {
    return (
      <div className='header'>
        <h1 className='Title'>CV Builder</h1>
        <div className='ButtonCont'>
          <button>About</button>
          <button>Contact</button>
        </div>
      </div>
    )
  }
}

export default Header