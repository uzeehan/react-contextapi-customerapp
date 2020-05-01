import React, { Component } from 'react'

export class AddContact extends Component {

    // form initial state
    state = {
        name: "",
        email: "",
        phone: ""
    }

    // onchange - enable inputs to enter data and set new state data
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    // submit form 
    onSubmitAddContact = e => {
        e.preventDefault();
        console.log(this.state);
    }



    render() {
        // destrcuturing Contact values from the state
        const { name, email, phone } = this.state;
        return (
            <div className="col-md-12">
                <h3>Add Contact</h3>
                <form onSubmit={this.onSubmitAddContact} >
                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-2">NAME</label>
                        <input type="text" name="name" className="form-control col-md-10"
                        value={name}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-md-2">EMAIL</label>
                        <input type="email" name="email" className="form-control col-md-10"
                        value={email}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-md-2">PHONE</label>
                        <input type="text" name="phone" className="form-control col-md-10"
                        value={phone}
                        onChange={this.onChange}/>
                    </div>
                    <div className="row">
                        <input type="submit" value="ADD CONTACT" className="btn btn-warning btn-block"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact
