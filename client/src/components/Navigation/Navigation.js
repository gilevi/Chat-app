import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-header">
            <a className="navbar-brand page-scroll" href="#page-top">
              React Chat App 
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
          </div>
      </nav>
    );
  }
}

export default Navigation;
