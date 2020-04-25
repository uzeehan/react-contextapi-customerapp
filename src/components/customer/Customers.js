import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

export class Customers extends Component {

    state = {
        contacts: [
            { id:1, name: 'John Doe', email: 'john@mail.com', phone: '4444-444-444' },
            { id:2, name: 'Danish Johnson', email: 'danish@mail.com', phone: '5555-555-555' },
            { id:3, name: 'Chris Hemsworth', email: 'chris@mail.com', phone: '6666-666-666' },
            { id:4, name: 'James Bond', email: 'james@mail.com', phone: '2222-222-222' }
        ]

    }

    render() {
        const { contacts } = this.state;
        return (
            <div className="container mt-3 pt-3">
                <h1>Customers List</h1>
                {
                    contacts.map((contact) => {
                        return (
                            // <div className="card" key={contact.id}>
                            //     <h3>{contact.name}</h3>
                            //     <p>{contact.email}</p>
                            //     <p>{contact.phone}</p>
                            // </div>
                            <div className="card" key={contact.id}>
                            {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                                <div className="card-body">
                                    <h3 className="card-title">{contact.name}</h3>
                                    <p className="card-text">
                                        {contact.email} <br />
                                        {contact.phone}</p>
                                    <a href="javascript:void(0)" className="btn-new-primary">read more</a>
                                </div>
                            </div>                            
                        )
                    })
                }
            </div>
        )
    }
}

export default Customers
