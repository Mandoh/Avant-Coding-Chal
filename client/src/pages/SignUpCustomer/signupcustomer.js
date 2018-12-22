import React, { Component } from 'react';
import { Row, Input, Button, Col, Section } from 'react-materialize';
import API from "../../utils/API";

import "./signupcustomer.css";




class SignUpCustomer extends Component {

  state = {
    firstName: "",
    lastName: "",
    creditLimit: 0,
  };

  formSubmit = event => {
    event.preventDefault();
    console.log("Submit button works!");

    let userData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      creditLimit: parseInt(this.state.creditLimit),
    }
    alert("Card created, go to dashboard");

    console.log(userData);
    API.saveUser(
      userData
    )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <form className="container signups" >
        <Section>
          <Row className="center main">
            <Col className="center main" s={12}>
              <Input s={12}
                label="First Name"
                onChange={(event) => this.handleInputChange(event)}
                name="firstname"
                value={this.state.firstname}
              />



              <Input
                label="Last Name"
                s={12}
                name="lastname"
                onChange={(event) => this.handleInputChange(event)}
                value={this.state.lastname}
              />

              <Input
                s={12}
                type="select"
                label="Credit Limit"
                // defaultValue="2" 
                onChange={(event) => this.handleInputChange(event)}
                name="creditLimit"
                default="Pick One"
              >
                <option value="none" ></option>
                <option value={1000} >1000</option>
                <option value={1500} >1500</option>
              </Input>



              <Button className="btn" onClick={(event) => this.formSubmit(event)}>Submit</Button>
            </Col >
          </Row>
        </Section>
      </form>
    );
  }
}

export default SignUpCustomer;