import React, { Component } from 'react';

// create a CONTEXT OBJECT
const Context = React.createContext();

// create a Reducer 
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default:
            return state;
    }
}


// create a PROVIDER CLASS COMPONENT  
export class Provider extends Component {

    state = {
        contacts: [
            { id:1, name: 'John Doe', email: 'john@mail.com', phone: '4444-444-444' },
            { id:2, name: 'Danish Johnson', email: 'danish@mail.com', phone: '5555-555-555' },
            { id:3, name: 'Chris Hemsworth', email: 'chris@mail.com', phone: '6666-666-666' },
            { id:4, name: 'James Bond', email: 'james@mail.com', phone: '2222-222-222' }
        ],
        // declare DISPATCH function here
        dispatch: action => this.setState(state => reducer (state, action))
    }

    render () {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}  

// export CONSUMER 
export const Consumer = Context;