import React, { Component } from 'react';
import {
  Container,
  List,
  ListGroup,
  ListGroupItem,
  Button,
  Media
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';


class MovieList extends Component {

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
          <ListGroup>
            <TransitionGroup className="movie-list">
              {items.map(({ _id, name}) => (
                <CSSTransition key={ _id } timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
            ))}
            </TransitionGroup>
          </ListGroup>
      </Container>
    );
  }
}

MovieList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(MovieList);