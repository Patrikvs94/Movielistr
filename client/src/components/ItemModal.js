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

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
    description: '',
    rating: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.description]: e.target.value,
      [e.target.rating]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      description: this.state.description,
      rating: this.state.rating
    };

    //Adds item through action
    this.props.addItem(newItem);

    //Closes modal
    this.toggle();
  }

  render() {
    return(
      <div>
        <Button
        color="dark"
        style={{marginBottom: '2rem'}}
        onClick={this.toggle}
        >Add Movie</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Movie List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Movie</Label>
                <Input type="text" name="name" id="item" placeholder="Movie Name" onChange={this.onChange}/>
                <Input type="text" name="description" id="item" placeholder="Description" onChange={this.onChange}/>
                <Input type="text" name="rating" id="item" placeholder="Rating" onChange={this.onChange}/>
                <Button color="dark" style={{marginTop: '2rem'}} block>Add Movie</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);
