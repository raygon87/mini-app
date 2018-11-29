import React, { Component } from 'react';
import "./App.css";

class NewClientInputComp
 extends Component {
    constructor() {
        super()
        this.state = {
            firstNameInput:'',
            lastNameInput: ''
        }
    }

    onSubmit = () => {
        console.log('in function')
        fetch('http://localhost:5000/client', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                first_name: this.state.firstNameInput,
                last_name: this.state.lastNameInput
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    onChangeFirst = (e) => {
        this.setState({firstNameInput: document.getElementById('first').value})
    }

    onChangeLast = (e) => {
        this.setState({lastNameInput: document.getElementById('second').value})   
    }

    render() {
        return (
            <div className="client-new-card">
                <div className="client-form">
                    First Name: <input id='first' onChange={this.onChangeFirst} placeholder="First Name"></input><br></br>
                    Last Name: <input id='second' onChange={this.onChangeLast} placeholder="Last Name"></input>
                </div>
                <div className="client-new-card-buttons">
                <button onClick={this.onSubmit} className="client-add">Add</button>
                </div>
            </div>
        )};
}

export default NewClientInputComp
;