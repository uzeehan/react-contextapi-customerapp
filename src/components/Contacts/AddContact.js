import React, { Component, Fragment } from 'react'

export class AddContact extends Component {

    state = {
        name: "",
        email: "",
        phone: ""
    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <div>
                <h3>ADD CONTACT</h3>
                <form>
                    <div className="form-group row">
                        <label className="col-md-2" htmlFor="name">NAME</label>
                        <input type="text"
                        value={name} name="name" className="col-md-10 form-control" placeholder="Enter Name..."/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-md-2">EMAIL</label>
                        <input type="email"
                        value={email} className="col-md-10 form-control" name="email" placeholder="Enter Email..."/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-md-2">PHONE</label>
                        <input type="text"
                        value={phone} name="phone" placeholder="Enter Phone..." className="col-md-10 form-control"/>
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
