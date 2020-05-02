import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a class="navbar-brand" href="#">Contact Manager</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/contact/add">Add</Link></li>
                        <li className="nav-item"><Link to="/about">About</Link></li>
                        {/* <li className="nav-item"></li> */}
                    </ul>
                </div>

            </div>
                

        </nav>
    )
}
