import React, { Component } from 'react';
import './NewClientComp.css'

class NewClientComp
 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstNameInput:'',
            lastNameInput: ''
        }
    }
 
    onSubmit = () => {
        if(this.state.firstNameInput !== '' && this.state.lastNameInput !== '') {
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
                let firstName = document.getElementById('first').value = ''
                let lastName = document.getElementById('last').value = ''
                this.props.fetchClients()
            })
        }
        else {
            alert('Please check the input fields!')
        }
    }

    onChangeFirst = (e) => {
        this.setState({firstNameInput: document.getElementById('first').value})
    }

    onChangeLast = (e) => {
        this.setState({lastNameInput: document.getElementById('last').value})   
    }

    render() {
        return (
            <div className="client-new-card">
                <div className="client-form">
                    <p>Add New Client</p>
                    First Name: <input id='first' onChange={this.onChangeFirst} placeholder="First Name"></input><br></br>
                    Last Name: <input id='last' onChange={this.onChangeLast} placeholder="Last Name"></input>
                </div>
                <div className="client-add-button-box">
                    <button onClick={this.onSubmit} className="client-add-button">Add</button>
                </div>
            </div>
        )};
}

export default NewClientComp;