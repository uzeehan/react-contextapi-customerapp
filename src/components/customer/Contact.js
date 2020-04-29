import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';


export class Contact extends Component {

    state = {
        showContactInfo: false
    }

    onDeleteClick = (id, dispatch) => {
        console.log("Clicked");
        dispatch({
            type: "DELETE_CONTACT",
            payload: id
        });
    }
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
                                <h3 className="card-title">{contact.name} {' '}
                                    <i className="fas fa-sort-down"
                                        onClick={() => {
                                            this.setState({
                                                showContactInfo: !this.state.showContactInfo
                                            })
                                        }}></i>
                                    <i className="fas fa-times" style={{ float: "right", color: "red" }}
                                        onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}></i>
                                </h3>
                                {
                                    showContactInfo ? (
                                        <p className="card-text">
                                            Email: {contact.email} <br />
                                        Phone: {contact.phone} <br /><br />
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
