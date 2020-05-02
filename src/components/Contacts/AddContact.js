import React, { Component } from 'react';
import { Consumer } from '../../Context';
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
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-md-2">NAME</label>
                                    <input type="text" name="name" className="form-control col-md-10"
                                        value={name}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-2">EMAIL</label>
                                    <input type="email" name="email" className="form-control col-md-10"
                                        value={email}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-md-2">PHONE</label>
                                    <input type="text" name="phone" className="form-control col-md-10"
                                        value={phone}
                                        onChange={this.onChange} />
                                </div>
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
