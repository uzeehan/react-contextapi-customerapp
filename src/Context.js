import React, { Component } from 'react';
import axios from 'axios';

// create a CONTEXT OBJECT
const Context = React.createContext();

// create a Reducer 
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                // initial state = ...state
                ...state, 
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact= action.payload : contact)
            }
        default:
            return state;
    }
}


// create a PROVIDER CLASS COMPONENT  
export class Provider extends Component {

    state = {
        contacts: [],
        // declare DISPATCH function here
        dispatch: action => this.setState(state => reducer (state, action))
    }

    // component did mount
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => this.setState({
    //         contacts: res.data
    //     }))
    // }

    // component did mount - async and await
    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');

        this.setState({
            contacts: res.data
        });
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