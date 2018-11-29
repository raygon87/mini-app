import React, { Component } from 'react';
import "./App.css";

class ClientCardComp extends Component {
    constructor(props) {
        super()
    }
    
    render() {
        return (
            
            <div className="client-card">
                <div className="client-name">
                    <h1>{this.props.firstName}</h1><h1>{this.props.lastName}</h1> 
                </div>
                <div className="client-form">
                    First Name: <input placeholder="Joe"></input><br></br>
                    Last Name: <input placeholder="Dirt"></input>
                </div>
                <div className="client-card-buttons">
                    <button className="client-update">Update</button>
                    <button className="client-update">Delete</button>
                </div>
            </div>
        )};
}

export default ClientCardComp;