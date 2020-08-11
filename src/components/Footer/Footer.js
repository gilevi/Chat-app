import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div id="footer">
          <div className="text-center">
            <p>
              &copy; Build by Gil Levi 2020   
            </p>

	    <div className="social">
	    <ul className="social"> 
	    <li className="social"> <a href="https://www.facebook.com/gil.levi.9"><i className="fa fa-facebook fa-2x"></i></a></li> 
	    <li className="social"> <a href="https://www.linkedin.com/in/gil-levi-4a9501167/"><i className="fa fa-linkedin fa-2x"></i></a></li> 
	    <li className="social"> <a href="https://github.com/gilevi"><i className="fa fa-github fa-2x"></i></a></li> 
	    </ul>
	    </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
