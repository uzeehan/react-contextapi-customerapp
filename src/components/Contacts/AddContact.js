import React, { Component, Fragment } from 'react'

export class AddContact extends Component {

    // state = {
    //     name: "",
    //     email: "",
    //     phone: ""
    // }

    // onNameChange = e => this.setState({ name: e.target.value });
    // onEmailChange = e => this.setState({ email: e.target.value });
    // onPhoneChange = e => this.setState({ phone: e.target.value});

    // onChange = e => this.setState({ [e.target.name]: e.target.value });

    // onSubmitAddContact = e => {
    //     e.preventDefault();
    //     console.log(this.state);
    // }

    constructor(props) {
        super(props);

        this.nameValue = React.createRef();
        this.emailValue = React.createRef();
        this.phoneValue = React.createRef();
    }  

    static defaultProps = {
        name: 'John Doe',
        email: 'john@mail.com',
        phone: '7777-777-777'
    }

    onSubmitAddContact = e => {
        e.preventDefault();
        const contact = {
            name: this.nameValue.current.value,
            email: this.emailValue.current.value,
            phone: this.phoneValue.current.value
        }
        console.log(contact);
    }

    render() {
        // const { name, email, phone } = this.state;
        const { name, email, phone } = this.props;
        return (
            <div>
                <h3>ADD CONTACT</h3>
                <form onSubmit={this.onSubmitAddContact}>
                    <div className="form-group row">
                        <label className="col-md-2" htmlFor="name">NAME</label>
                        <input type="text"
                        defaultValue={name}
                        ref={this.nameValue}
                        // onChange={this.onChange} 
                        name="name" className="col-md-10 form-control" 
                        placeholder="Enter Name..."/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-md-2">EMAIL</label>
                        <input type="email"
                        defaultValue={email} className="col-md-10 form-control" 
                        ref={this.emailValue}
                        // onChange={this.onChange} 
                        name="email" 
                        placeholder="Enter Email..."/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-md-2">PHONE</label>
                        <input type="text"
                        defaultValue={phone} name="phone" placeholder="Enter Phone..." 
                        ref={this.phoneValue}
                        // onChange={this.onChange}
                        className="col-md-10 form-control"/>
                    </div>
                    <div className="form-group row">
                        <input type="submit" value="Add Contact" className="btn btn-warning btn-block"/>
                    </div>

                </form>                
            </div>
        )
    }
}

export default AddContact
