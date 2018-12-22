import React, { Component } from "react";
import { Row, Input, Button, Col, Section, Card, Modal } from "react-materialize";
import API from "../../utils/API";
import "./transaction.css";


class SignUpChef extends Component {
  state = {
    card: [],
    chargeType: "",
    numDays: 0,
    transAmount: 0
  };

  numbers = {
    numCharge: 0,
    newBal: 0,
    calcInt: 0,
    dayTot: 0
  }
  componentDidMount() {
    this.loadCard();
    console.log(this.state);
  }

  loadCard = () => {
    API.getCard(this.props.match.params.id)
      .then(res => this.setState({
        card: res.data
      }))
      // .then(res => this.setCard(res))
      // .then(res => console.log(res.data))
      // .then(console.log(this.state.card))
      .catch(err => console.log(err));
  };


  monthCheck = () => {
    if ((this.state.card.numDays + parseInt(this.state.numDays) > 29) & ((this.state.chargeType === "charge") || (this.state.chargeType === "none")) ) {
      this.numbers.newBal = parseInt(this.state.transAmount) + this.state.card.bal + this.numbers.calcInt
      console.log("1");
    }

    else if ((this.state.card.numDays + parseInt(this.state.numDays) > 29) & ((this.state.chargeType === "payment") || (this.state.chargeType === "none"))) {
      this.numbers.newBal = this.state.card.bal - parseInt(this.state.transAmount) + this.numbers.calcInt
      console.log("2");
    }

    else { this.calculateBal(parseInt(this.state.transAmount)) };
  };

  calculateBal = (tA) => {
    console.log("bal run")
    if (this.state.chargeType === "charge") {
      this.numbers.newBal = tA + this.state.card.bal
      console.log("3")
    }

    else if (this.state.chargeType === "payment") {
      this.numbers.newBal = this.state.card.bal - tA
      console.log("4")
    }

  };

  calculateInt = () => {
    this.numbers.calcInt = this.state.card.bal * (.35 / 365) * parseInt(this.state.numDays) + this.state.card.interest
    console.log("interest calculated");
  };

  sumDays = () => {
    this.numbers.dayTot = parseInt(this.state.card.numDays) + parseInt(this.state.numDays)
  };

  sumTrans = () => {
    this.numbers.numCharge = this.state.card.numCharge + 1

  };

  // Function declarations for how this component works
  formSubmit = event => {
    event.preventDefault();
    console.log("Submit button works!");
    console.log(this.state);
    this.sumDays();
    this.sumTrans();
    this.calculateInt();
    this.monthCheck();

    let cardData = {
      bal: this.numbers.newBal,
      interest: this.numbers.calcInt,
      numDays: this.numbers.dayTot,
      numCharge: this.numbers.numCharge

    }
    alert("Transaction processed, return to dashboard");
    console.log(cardData);
    API.updateCard(this.props.match.params.id,
      cardData
    )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  /////////////////////////////////////////////////////////////
  render() {
    return (
      <Section className="center">
        <form className="container signups" >
          <Row className="signup container">
            <Col className="left" s={6} m={6}>

              <Row>
                <Input
                  s={6}
                  type="select"
                  label="Payment or Charge"
                  // defaultValue="2" 
                  onChange={(event) => this.handleInputChange(event)}
                  name="chargeType"
                  default="Pick One"
                >
                  <option value="none" >Neither</option>
                  <option value="payment" >Payment</option>
                  <option value="charge" >Charge</option>
                </Input>
              </Row>
              <Row>
                <Input
                  s={6}
                  type="select"
                  label="# Days since last transaction"
                  onChange={(event) => this.handleInputChange(event)}
                  name="numDays"
                  default={0}
                >
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={30}>30</option>
                </Input>
              </Row>
              <Row>
                <Input
                  label="Transaction Amount in $"
                  s={12}
                  onChange={(event) => this.handleInputChange(event)}
                  name="transAmount"
                  default={0}
                />
              </Row>
              <Row>
                <Button className="btn" onClick={(event) => this.formSubmit(event)}>Submit</Button>
              </Row>
            </Col >


            <Modal
              id='foo'
              header='Modal Header'>
              Lorem ipsum dolor sit amet
  </Modal>

            <Col s={6} m={6} className="right">
              <Card className='blue-grey lighten-1' textClassName='black-text' title='Card Info'>
                <Row>
                  <span>{"Card Holder Full Name: " + this.state.card.firstname + " " + this.state.card.lastname}</span>
                </Row>
                <Row>
                  <span>{"Current Balance: " + this.state.card.bal}</span>
                </Row>
                <Row>
                  <span>{"APR: " + this.state.card.apr}</span>
                </Row>
                <Row>
                  <span>{"Credit Line Open For: " + this.state.card.numDays + " days"}</span>
                </Row>
              </Card>
            </Col>
          </Row>
        </form>
      </Section>
    );
  }
}

export default SignUpChef;
