import React, { Component } from 'react';
import './ClientCardComp.css'

class ClientCardComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: this.props.firstName,
            last: this.props.lastName
        }
    }
    
    onUpdate = () => {
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
            this.setState({first: this.state.first})
            this.setState({first: this.state.last})
        })
    }

    onDelete = () => {
        console.log('in function')
        fetch(`http://localhost:5000/client/${this.props.id}`, {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                first_name: this.state.first,
                last_name: this.state.last,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }


    onfirst = () => {
        let firstInput = document.getElementById('firstInput').value
        console.log(firstInput)
        //this.setState({first: firstInput})
    }

    onlast = () => {
        this.setState({last: document.getElementById('lastInput').value})   
        console.log(this.state.last)
    }

    render() {
        return (
            <div className="client-card">
                <div className="client-name">
                    <h3>{this.state.first}</h3> 
                    <h3>{this.state.last}</h3> 
                </div>
                <div className="client-form">
                    First Name: <input id='firstInput' onChange={this.onfirst} placeholder={this.state.first}/><br></br>
                    Last Name: <input id='lastInput' onChange={this.onlast} placeholder={this.state.last}/>
                </div>
                <div className="client-card-buttons">
                    <button onClick={this.onUpdate} className="client-buttons">Update</button>
                    <button onClick={this.onDelete} className="client-buttons">Delete</button>
                </div>
            </div>
        )};
}

export default ClientCardComp;