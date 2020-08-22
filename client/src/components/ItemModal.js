import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const API_KEY = '4fc01747';
const API_URL = 'http://www.omdbapi.com/';

class ItemModal extends Component {
  state = {
    modal: false,
    request: '',
    //suggestions: []
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

/*
  getInfo = () => {
    fetch(`${API_URL}?api_key=${API_KEY}&s=${this.state.request}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          suggestions: data.Title
        })
      })
  }
*/
  onChange = (e) => {
    e.preventDefault();

    this.setState({
      request: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}?apikey=${API_KEY}&t=${this.state.request}`)
   .then((res) => res.json())
   .then((data) => {
     //Just for error handling
      if(data.Error === 'Movie Not Found!')
        console.log(`Can't find movie`);

      //Check what data comes in on the console
      console.log(data);

      //Create an item to post to our database
      const newItem = {
        name: data.Title,
        description: data.Plot,
        rating: data.imdbRating,
        poster: data.Poster
       };

        //Adds item through action
        this.props.addItem(newItem);
   }).catch(function (err) {
       console.log('Caught!', err)
   })

    //Closes modal
    this.toggle();
  }

  render() {
    return(
      <div>
        {this.props.isAuthenticated ?
          <Button
            color="dark"
            style={{marginBottom: '2rem', marginLeft: '40%'}}
            onClick={this.toggle}
            >Add movie to your deck
          </Button> : <h4 className="mb-3 ml-4">Please log in to manage cards.</h4>
        }

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Movie List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Movie</Label>
                <Input type="text" name="request" id="item" placeholder="What movie do you want to add? Enter a correct movie name." onChange={this.onChange} />
                <Button color="dark" style={{marginTop: '2rem'}} block>Add movie</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addItem })(ItemModal);
