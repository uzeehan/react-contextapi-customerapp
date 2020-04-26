import React, { Component } from 'react';
import Contact from './Contact';

export class Contacts extends Component {

    state = {
        contacts: [
            { id:1, name: 'John Doe', email: 'john@mail.com', phone: '4444-444-444' },
            { id:2, name: 'Danish Johnson', email: 'danish@mail.com', phone: '5555-555-555' },
            { id:3, name: 'Chris Hemsworth', email: 'chris@mail.com', phone: '6666-666-666' },
            { id:4, name: 'James Bond', email: 'james@mail.com', phone: '2222-222-222' }
        ]
    }

    onDeleteContact = (id) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter((contact) => { return contact.id !== id});
        this.setState({
            contacts: newContacts
        });
        console.log(id);
    }

    render() {
        const { contacts } = this.state;
        
        return (
            <div className="container mt-3 pt-3">
                <h1>Customers List</h1>
                {
                    contacts.map((contact) => {
                        return (
                            <Contact 
                                key={contact.id}
                                contact={contact}
                                onDeleteContactHandler={this.onDeleteContact.bind(this, contact.id)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Contacts
