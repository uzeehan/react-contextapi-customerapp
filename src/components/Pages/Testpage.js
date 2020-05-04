import React, { Component } from 'react';
import axios from 'axios';


export class Testpage extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         newnam: '',
    //         email: ''
    //     };
    // }

    state = {
        username: '',
        email: '',
        website: ''
    };


    componentDidMount () {
        // fetch ('https://jsonplaceholder.typicode.com/users/1')
        // .then(res => console.log(res.json()));

        // fetch ('https://jsonplaceholder.typicode.com/users/1')
        // .then(res => res.json())
        // .then(data => console.log(data))

        // fetch('https://jsonplaceholder.typicode.com/users/1')
        // .then(res => res.json())
        // .then(data => this.setState({
        //     username: data.username,
        //     email: data.email,
        //     website: data.website
        // }));

        // const data = request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
        //     console.error('error:', error); // Print the error if one occurred
        //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //     console.log('body:', body); // Print the HTML for the Google homepage.
        //     return body
        // })       

        // axios
        // axios.get('https://jsonplaceholder.typicode.com/users/1')
        // .then(res =>  console.log(res.data));

        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => this.setState({
            username: res.data.username,
            email: res.data.email,
            website: res.data.website
        }))
        

    }

    //#region Life Cycle Methods
    // // component did mount
    // componentDidMount () {
    //     console.log('did mount...');
    // }

    // // component will mount
    // componentWillMount () {
    //     console.log('will mount');
    // }

    // // componentDidUpdate
    // componentDidUpdate () {
    //     console.log('Compnent Did Update...');
    // }

    // // component will update
    // componentWillUpdate () {
    //     console.log('will update');
    // }

    // // component will receive props
    // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    //     console.log('will receive props');
    // }

    // // get derived state form props
    // static getDerivedStateFromProps (nextProps, nextState) {
    //     return {
    //         test: 'something'
    //     };
    //     console.log('getDerivedStateFromProps');
    // }

    // // get snapshot
    // getSnapshotBeforeUpdate () {
    //     console.log('getSnapshotBeforeUpdate');
    // }
    //#endregion

    render() {
        const {  username, email, website } = this.state;
        return (
            <div>
                <h1>TEST</h1>
                <h3>{ username }</h3>
                <p>{ email }</p>
                <p>{ website } </p>
            </div>
        )
    }
}

export default Testpage
