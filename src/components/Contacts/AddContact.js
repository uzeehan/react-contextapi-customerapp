import React, { Component } from 'react';
import { Consumer } from '../../Context';
import TextInputGroup from '../Layout/TextInputGroup';
// import uuid from 'react-uuid';
import axios from 'axios';

export class AddContact extends Component {

    // form initial state
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    }

    // onchange - enable inputs to enter data and set new state data
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    // submit form 
    onSubmitAddContact = async (dispatch, e) => {
        e.preventDefault();
        // pull out properties from the component state
        const { name, email, phone } = this.state;

        // create a new contact
        const newContact = {
            // id: uuid(),
            name: name,
            email: email,
            phone: phone
        }

        // validate form inputs
        if(name === "") {
            this.setState({
                errors: {
                    name: "Name is required"
                }
            });
            return;
        }

        if(email === "") {
            this.setState({ errors: { email: "Email is required" }});
            return;
        }

        if(phone === "") {
            this.setState({ errors: { phone: "Phone is required" } });
            return;
        }

        // post request 
        // axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        // .then(res => console.log(res.data))
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({
            type: 'ADD_CONTACT',
            payload: res.data
        });

        // axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        // .then(res => dispatch({
        //     type: 'ADD_CONTACT',
        //     payload: res.data
        // }))


        // dispatch
        // dispatch({
        //     type: 'ADD_CONTACT',
        //     payload: newContact
        // });

        this.setState({
            name: '',
            email: '',
            phone: ''
        })

        this.props.history.push('/');

        // console.log(this.state);
    }



    render() {
        // destrcuturing Contact values from the state
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;
                    return (
                        <div className="col-md-12">
                            <h1 className="text-display-4">ADD CONTACT</h1>
                            <form onSubmit={this.onSubmitAddContact.bind(this, dispatch)} >
                                <TextInputGroup
                                    label="Name"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={this.onChange}
                                    error= {errors.name}
                                />
                                <TextInputGroup 
                                    label= "Email"
                                    name= "email"
                                    placeholder="Enter Email" 
                                    value= {email}
                                    type= "email"
                                    onChange= {this.onChange}
                                    error= {errors.email}
                                />

                                <TextInputGroup
                                    label= "Phone"
                                    name= "phone"
                                    placeholder= "Enter Phone"
                                    value= {phone}
                                    onChange= {this.onChange}
                                    error= {errors.phone}
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
