import React, { Component } from 'react';
import "./App.css";
import ClientcardComp from "./ClientcardComp";
import ClientnewcardComp from "./ClientnewcardComp";


class ClientComp extends Component {
    constructor() {
        super()
        this.state = {
          display: ''
        }
    }

    fetchData = () => {
        fetch('http://localhost:5000')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    onClick = () => {
        this.setState({ display: 'client-card' });
    }

    onClicknew = () => {
        this.setState({ display: 'new-client-card' });
      }

    render() {
        let toShow;
        if (this.state.display === 'client-card') {
            toShow = 
            <div className="container">
                <ClientcardComp name="client-card"/>
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
                    Client Name: <input className="client-input"></input>
                    <button type="client-submit" onClick={this.onClick}>Submit</button>
                </div>
                <button onClick={this.fetchData}>fetch</button>
                <div> { toShow }</div>
                <button onClick={this.onClicknew}>Add New</button><br></br>
            </div>
        );
    }
}

export default ClientComp;