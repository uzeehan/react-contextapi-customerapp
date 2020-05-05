import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import { Link } from 'react-router-dom';
import axios from 'axios';


export class Contact extends Component {

    state = {
        showContactInfo: false
    }

    // onDeleteClick = (id, dispatch) => {
    //     console.log("Clicked");

    //     axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then(res => dispatch({
    //         type: 'DELETE_CONTACT',
    //         payload: id
    //     }));

    //     // dispatch({
    //     //     type: 'DELETE_CONTACT',
    //     //     payload: id
    //     // });
    // };
    onDeleteClick = async (id, dispatch) => {
        console.log("Clicked");

        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    };

    render() {
        const { contact } = this.props;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;
                    return (
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{contact.name} {' '}
                                    <i className="fas fa-sort-down"
                                        onClick={() => {
                                            this.setState({
                                                showContactInfo: !this.state.showContactInfo
                                            })
                                        }}></i>
                                    <i className="fas fa-times" style={{ float: "right", color: "red" }}
                                        onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}></i>
                                    <Link to={`contact/edit/${contact.id}`} >
                                        <i className="fas fa-pencil-alt"></i>
                                    </Link>
                                </h4>
                                {
                                    showContactInfo ? (
                                        <p className="card-text">
                                            <span>Email: {contact.email}</span> <br />
                                            <span>Phone: {contact.phone}</span> <br /><br />
                                            <a href="/" className="btn-new-primary">read more</a>
                                        </p>
                                    ) : null
                                }
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;
