import React, { Component } from 'react';
import "./App.css";
import ClientCardComp from "./ClientCardComp";
import ClientnewcardComp from "./ClientnewcardComp";


class ClientComp extends Component {
    constructor() {
        super()
        this.state = {
          display: '',
          input: ''
        }
    }


    onClick = () => {
        this.setState({ display: 'client-card' });
        fetch(`http://localhost:5000/client/${this.state.input}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err,'error'))
    }

    onChange = () => {
        this.setState({input: document.getElementById('searchInput').value})
    }

    onClicknew = () => {
        this.setState({ display: 'new-client-card' });
        
      }

    render() {
        let toShow;
        if (this.state.display === 'client-card') {
            toShow = 
            <div className="container">
                <ClientCardComp name="client-card"/>
            </div>
        } else if (this.state.display === 'new-client-card') {
            toShow = 
            <div className="container">
                <ClientnewcardComp name="new-client-card"/>
            </div>
        }
        return (
            <div className="client-cardbox">
                <div className="client-header">
                    Client Name: <input id='searchInput'  onChange={this.onChange} className="client-input"></input>
                    <button type="client-submit" onClick={this.onClick}>Submit</button>
                </div>
                <div> { toShow }</div>
                <button onClick={this.onClicknew}>Add New</button><br></br>
            </div>
        );
    }
}

export default ClientComp;