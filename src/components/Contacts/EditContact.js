import React, { Component } from 'react';
import TextInputGroup from '../Layout/TextInputGroup';
import { Consumer } from '../../Context';
import axios from 'axios';

export class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    // async componentDidMount () {
    //     const { id } = this.props.match.params;

    //     const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    //     const contact = res.data;

    //     this.setState({
    //         name: contact.name,
    //         email: contact.email,
    //         phone: contact.phone
    //     })

    //     console.log(id);
    // }

    // Component Did Mount - get/fetch data fromt the JSON placeholder fake REST API server
    componentDidMount () {
        const { id } = this.props.match.params;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( res => this.setState({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone
        }))
    }

    // UNCONTROLLED COMPONENT
    onChange = e => this.setState({ [e.target.name]: e.target.value })

    // EDIT FUNCTION 
    onSubmitEditContact = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        // form validation
        if (name === '') {
            this.setState({ errors: { name: 'Enter valid name' } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: "Enter valid email" } });
            return;
        }

        if (phone === '') {
            this.setState({ errors: { phone: 'Enter valid phone' } });
            return;
        }

        const updateContact = {
            name,
            email,
            phone
        }

        // AXIOS PUT
        const { id } = this.props.match.params;
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
        .then(res => dispatch({
            type: 'UPDATE_CONTACT',
            payload: res.data
        }));

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    }


    render() {
        const { name, email, phone, errors } = this.state;
        return (

            <Consumer>
                {(value) => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <h1>EDIT CONTACT</h1>
                            <form onSubmit={this.onSubmitEditContact.bind(this, dispatch)}>
                                <TextInputGroup
                                    label="Name"
                                    name="name"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <TextInputGroup
                                    label="Email"
                                    name="email"
                                    placeholder="Enter Email"
                                    type="email"
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <TextInputGroup
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter Phone"
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                />

                                <div className="form-group row">
                                    <input type="submit" value="Update Contact" className="btn btn-block btn-success" />
                                </div>
                            </form>
                        </div>
                    )
                }}
            </Consumer>

        )
    }
}

export default EditContact
