import React, { Component } from 'react';
import {
  Container,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import '../App.css';

class MovieList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }

  componentDidMount(){
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  }

  render(){
    const {items} = this.props.item;
    return(
      <Container>
        <Row>
          {items.map(({ _id, name, description, rating, poster}) => (
            <Col key= {_id} lg={4} sm={6} xs={12}>
              <Card className="mb-2">
                <CardImg top style={{maxHeight: 450}} src={poster}></CardImg>
                <CardBody>
                  <CardTitle style={{fontFamily: 'JenrivTitling', fontSize: 22}}>{name}</CardTitle>
                  <CardSubtitle style={{justifyContent: 'center'}}><h6 style={{display: 'inline-flex'}}>{rating} / 10.0</h6></CardSubtitle>
                  <CardText style={{overflowY: 'scroll', maxHeight: 70}}>{description}</CardText>
                  <div className="text-center">
                    {this.props.isAuthenticated ?
                      <Button
                        className="remove-btn text-center"
                        color="danger"
                        size="sm"
                        style={{borderRadius: '25px'}}
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times;
                      </Button> : null
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getItems, deleteItem })(MovieList);
