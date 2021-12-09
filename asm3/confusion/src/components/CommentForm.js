import React, { Component } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import { Button, Col, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length < len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModal: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    toggleModal() {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }
    handleSubmit(values) {
        this.toggleModal ();
        
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

    }
    render() {
        return (
            <div>
                <Button onClick={this.toggleModal}><i className='fa fa-book'></i>
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isOpenModal}>
                    <ModalHeader onClick={this.toggleModal}>Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select className='form-control' name='select'
                                        model='.rating'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label md={2} htmlFor='name'>Name</Label>
                                <Col md={10}>
                                    <Control.text className='form-control' id='name'
                                        model='.author' placeholder='Name'
                                        validators={{
                                            required, maxLength: maxLength(15), minLength: minLength(2)
                                        }}></Control.text>
                                    <Errors className='text-danger' model='.author' show='touched'
                                        messages={{
                                            required: 'Required',
                                            maxLength: 'khong duoc nhieu hon 15 ki tu',
                                            minLength: 'khong dc it hon 2 ki tu'
                                        }}></Errors>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label md={2}> Comment</Label>
                                <Col md={10}>
                                    <Control.textarea className='form-control' model='.comment'
                                        rows='6'></Control.textarea>
                                </Col>
                            </Row>
                            <Button type='submit' color='primary'>Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default CommentForm;