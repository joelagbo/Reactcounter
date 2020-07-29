import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            {" "}
            <span className="badge badge-pill badge-secondary">
              You have added{" "}
              <span className="btn btn-primary btn-sm m-2">
                {this.props.countNumber}
              </span>{" "}
              items in your cart
            </span>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
