import React, { Component } from 'react';
import './ClientCardComp.css'

class ClientCardComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstNameInput: '',
            lastNameInput: '',
            firstNameHeader: this.props.firstName,
            lastNameHeader: this.props.lastName
        }
    }
    
    onUpdate = () => {
        if(this.state.first !== '' & this.state.last !== '') {
            fetch(`http://localhost:5000/client/${this.props.id}`, {
                method: 'put',
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
        } else {
            alert('Please check the input fileds!')
        }
    }

    onDelete = () => {
        console.log('in function')
        fetch(`http://localhost:5000/client/${this.props.id}`, {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                first_name: this.state.firstNameInput,
                last_name: this.state.lastNameInput,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        let deleted = document.querySelector('.client-card' + this.props.id)
        deleted.remove()
    }

    onfirst = () => {
        let firstNameInput = document.querySelector('.firstInput' + this.props.id).value
        let firstNameHeader = document.querySelector('.firstInput' + this.props.id).value
        this.setState({firstNameInput: firstNameInput})
        this.setState({firstNameHeader: firstNameInput})
    }

    onlast = () => {
        let lastNameInput = document.querySelector('.lastInput' + this.props.id).value
        this.setState({lastNameInput: lastNameInput})
        this.setState({lastNameHeader: lastNameInput})
    }

    onDeleteClient = () => {
        
    }
    

    render() {
        return (
            
            <div className={"client-card client-card" + this.props.id}>
                <div className="client-name">
                    <h3>{this.state.firstNameHeader}</h3> 
                    <h3>{this.state.lastNameHeader}</h3>
                </div>
                <div className="client-form">
                    First Name: <input className={'firstInput' + this.props.id} onChange={this.onfirst} placeholder={this.state.first}/><br></br>
                    Last Name: <input className={'lastInput' + this.props.id} onChange={this.onlast} placeholder={this.state.last}/>
                </div>
                <div className="client-card-buttons">
                    <button onClick={this.onUpdate} className="client-buttons">Update</button>
                    <button onClick={this.onDelete} className="client-buttons">Delete</button>
                </div>
            </div>
        )};
}

export default ClientCardComp;