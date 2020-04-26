import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Contact extends Component {   
    
    state = {
        showContactInfo: false
    }

    // onShowClick = (e) => {
    //     this.setState({
    //         showContactInfo: !this.state.showContactInfo
    //     })
    // }

    onDeleteClick = (id) => {
        console.log("Clicked");
        this.props.onDeleteContactHandler();
    }
    render() {
        const { contact } = this.props;
        const { showContactInfo } = this.state;
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
                        <i className="fas fa-times" style={{float:"right", color:"red"}}
                        onClick={this.onDeleteClick}></i>
                    </h3>
                    {
                        showContactInfo ? (
                            <p className="card-text">
                                Email: {contact.email} <br />
                                Phone: {contact.phone} <br/><br/>
                                <a href="/" className="btn-new-primary">read more</a>
                            </p>
                        ) : null
                    }
                </div>
            </div>    
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    onDeleteContactHandler: PropTypes.func.isRequired
}

export default Contact;
