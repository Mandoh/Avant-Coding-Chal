import React from "react";
import API from "../../utils/API";
import {
  Col,
  Row,
  Section,
  Button,
  CollectionItem

} from "react-materialize";
import Collection from "react-materialize/lib/Collection";
import "./dashboard.css";

class userInterface extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    this.loadCards();
  }

  setCards = res =>
    this.setState({
      cards: res.data,
    });

  loadCards = () => {
    return API.getCards().then(res => this.setCards(res));

  };

  render() {
    return (
      <Section className="center">
        <Row className="center main">
          <Col l={12} className="num1">
            <Col className="jumbotron" s={12}>
              <h1>Your Cards</h1>
            </Col>

            {this.state.cards.length ? (
              <Collection>
                {this.state.cards.map(card => (
                  <CollectionItem>
                  <Row>
                    <Col s={4}> 
                    {"Card Holder Last Name: " + card.lastname}
                    <p>{"Credit Line Open For: " + card.numDays + " days"}</p>
                    </Col>
                    <Col s={4}> 
                    {"Current Balance: " + card.bal}
                    <p>{"Accrued Interest: " + card.interest}</p>
                    </Col>
                    <Col s={4}> 
                    <Button className="btn" ><a href={`/transaction/` + card._id} >Transaction</a></Button>
                    
                    </Col>
                  </Row>
                  </CollectionItem>

                ))}
              </Collection>
            ) : (
                <h3>No Results to Display</h3>
              )}




          </Col>
        </Row>
      </Section>
    );
  }
}

export default userInterface;
