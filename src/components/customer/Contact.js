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
    render() {
        const { name, phone, email } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <div className="card">
                <div className="card-body">
                    <h3 onClick={() => {
                            this.setState({
                                showContactInfo: !this.state.showContactInfo
                            })
                        }}  className="card-title">{name} {' '}
                        <i className="fas fa-sort-down"></i>
                    </h3>
                    {
                        showContactInfo ? (
                            <p className="card-text">
                                Email: {email} <br />
                                Phone: {phone} <br/><br/>
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
    contact: PropTypes.object.isRequired
}

export default Contact;
