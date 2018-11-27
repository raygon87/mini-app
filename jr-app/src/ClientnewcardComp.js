import React, { Component } from 'react';
import "./App.css";

class ClientnewcardComp extends Component {
    render() {
        return (
            <div className="client-new-card">
                <div className="client-form">
                    First Name: <input placeholder="First Name"></input><br></br>
                    Last Name: <input placeholder="Last Name"></input>
                </div>
                <div className="client-new-card-buttons">
                    <button className="client-add">Add</button>
                </div>
            </div>
        )};
}

export default ClientnewcardComp;