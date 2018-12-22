import React from "react";
import { Navbar, NavItem } from "react-materialize";
import ImportedImage from "../../images/logo-light.png";
import "./Nav.css";

var Img = <img alt="ime" className="logo" src={ImportedImage} />;

export default () => (
  <Navbar brand={Img} className="grey darken-1 appbar" left>
    
    <NavItem href="/dashboard">Dashboard</NavItem>
    <NavItem href="/">New Card</NavItem>
    
  </Navbar>
);
