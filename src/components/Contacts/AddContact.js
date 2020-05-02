import React, { Component } from 'react';
import { Consumer } from '../../Context';
import TextInputGroup from '../Layout/TextInputGroup';
import uuid from 'react-uuid';

export class AddContact extends Component {

    // form initial state
    state = {
        name: "",
        email: "",
        phone: ""
    }

    // onchange - enable inputs to enter data and set new state data
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    // submit form 
    onSubmitAddContact = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        const newContact = {
            id: uuid(),
            name: name,
            email: email,
            phone: phone
        }
        dispatch({
            type: 'ADD_CONTACT',
            payload: newContact
        });

        this.setState({
            name: '',
            email: '',
            phone: ''
        })
        console.log(this.state);
    }



    render() {
        // destrcuturing Contact values from the state
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;
                    return (
                        <div className="col-md-12">
                            <h3>ADD CONTACT</h3>
                            <form onSubmit={this.onSubmitAddContact.bind(this, dispatch)} >
                                <TextInputGroup
                                    label="Name"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={this.onChange}
                                />
                                <TextInputGroup 
                                    label= "Email"
                                    name= "email"
                                    placeholder="Enter Email" 
                                    value= {email}
                                    type= "email"
                                    onChange= {this.onChange}
                                />

                                <TextInputGroup
                                    label= "Phone"
                                    name= "phone"
                                    placeholder= "Enter Phone"
                                    value= {phone}
                                    onChange= {this.onChange}
                                />

                                <div className="row">
                                    <input type="submit" value="ADD CONTACT" className="btn btn-warning btn-block" />
                                </div>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact
