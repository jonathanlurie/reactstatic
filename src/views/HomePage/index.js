import React from 'react'
import {
  Link,
} from "react-router-dom"



export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    
    fetch('https://raw.githubusercontent.com/jonathanlurie/gallica/master/readme.md')
    .then((res) => res.text())
    .then((txt) => console.log(txt))



    return (
      <div>
        This is the Home page<br/>
        <Link to="">home</Link> <br/>
        <Link to="about">about</Link><br/>
        <Link to="contact">contact</Link><br/>
        <Link to="about">about</Link><br/>
        <Link to="authenticate">authenticate</Link><br/>
      </div>
    )
  }
}