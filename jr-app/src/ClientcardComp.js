import React, { Component } from 'react';
import "./App.css";

class ClientCardComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: this.props.firstName,
            last: this.props.lastName
        }
    }
    
    onUpdate = () => {
        console.log('in function')
        fetch(`http://localhost:5000/client/${this.props.id}`, {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                first_name: this.state.first,
                last_name: this.state.last
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    onfirst = () => {
        this.setState({first: document.getElementById('first').value})
    }

    onlast = () => {
        this.setState({last: document.getElementById('last').value})   
    }

    render() {
        return (
            <div className='cardListContainer'>
                <div className="client-card">
                    <div className="client-name">
                        <h3>{this.state.first}</h3> 
                        <h3>{this.state.last}</h3> 
                    </div>
                    <div className="client-form">
                        First Name: <input id='first' onChange={this.onfirst} placeholder={this.state.first}></input><br></br>
                        Last Name: <input id='last' onChange={this.onlast} placeholder={this.state.last}></input>
                    </div>
                    <div className="client-card-buttons">
                        <button onClick={this.onUpdate} className="client-buttons">Update</button>
                        <button className="client-buttons">Delete</button>
                    </div>
                </div>
            </div>
        )};
}

export default ClientCardComp;