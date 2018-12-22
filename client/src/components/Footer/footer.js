import React from "react";
import { Footer } from "react-materialize";
import ImportedImage from "../../images/logo-light.png";

let Img = <img alt="ime" className="logo" src={ImportedImage} />;

export default () => (
  <Footer
    copyrights="Avant Coding Challenge"
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">
        {/* More Links */}
      </a>
    }
    links={
      <ul>
        <li>
          <a className="grey-text text-lighten-3" target= "blank" href="https://www.linkedin.com/in/armando-martinez-9a06a8155/">
            LinkedIn
          </a>
        </li>
      </ul>
    }
    className="example grey"
  >
    <h5 className="white-text">{Img}</h5>
    <p className="grey-text text-lighten-4">
      Avant Coding Challenge by Armando Martinez 12/21/2018
      
     
    </p>
  </Footer>
);
