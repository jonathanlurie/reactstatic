import React from 'react'
import {
  Link,
} from "react-router-dom"

export default class GenericPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        This is the Generic page (possibly 404)<br/>
        <Link to="">home</Link> <br/>
        <Link to="about">about</Link><br/>
        <Link to="contact">contact</Link><br/>
        <Link to="about">about</Link><br/>
        <Link to="authenticate">authenticate</Link><br/>
      </div>
    )
  }
}