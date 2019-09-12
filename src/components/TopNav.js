import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    });
  }

  render() {
    return (
      <div className={this.state.condition ? "topnav responsive" : "topnav"}>
        <Link to="/" className="active" onClick={this.handleClick}>
          Home
        </Link>
        <Link to="/about" onClick={this.handleClick}>
          About
        </Link>
        <Link to="/contact" onClick={this.handleClick}>
          Contact
        </Link>

        <div className="icon" onClick={this.handleClick}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    );
  }
}

export default TopNav;
