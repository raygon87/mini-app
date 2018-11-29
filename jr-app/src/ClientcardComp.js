import React, { Component } from 'react';
import "./App.css";

class ClientCardComp extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className='cardListContainer'>
                <div className="client-card">
                    <div className="client-name">
                        <h3>{this.props.firstName}</h3> 
                        <h3>{this.props.lastName}</h3> 
                    </div>
                    <div className="client-form">
                        First Name: <input placeholder="Joe"></input><br></br>
                        Last Name: <input placeholder="Dirt"></input>
                    </div>
                    <div className="client-card-buttons">
                        <button className="client-buttons">Update</button>
                        <button className="client-buttons">Delete</button>
                    </div>
                </div>
            </div>
        )};
}

export default ClientCardComp;