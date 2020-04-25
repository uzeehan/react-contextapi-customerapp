import React, { Component } from 'react';
import Contacts from './Contacts';

export class Contact extends Component {    
    render() {
        const { id, name, phone, email } = this.props.contact;
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">
                        {email} <br />
                        {phone}</p>
                    <a href="" className="btn-new-primary">read more</a>
                </div>
            </div>    
        )
    }
}

export default Contact
