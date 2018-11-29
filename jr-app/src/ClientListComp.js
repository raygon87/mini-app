import React, { Component } from 'react';
import "./App.css";
import ClientCardComp from "./ClientCardComp";
import NewClientInputComp from "./NewClientInputComp";


class ClientListComp extends Component {
    constructor(props) {
        super()
        this.state = {
          display: '',
          input: '',
        }
        this.clientList = []
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
                <ClientCardComp clients={this.props.clients} name="client-card"/>
            </div>
        } else if (this.state.display === 'new-client-card') {
            toShow = 
            <div className="container">
                <NewClientInputComp name="new-client-card"/>
            </div>
        }

        this.props.clients['clients'].forEach(client => {
            this.clientList.push(client)
        })

        return (
            <div className="client-cardbox">
                <div>
                    Search Client: <input id='searchInput'  onChange={this.onChange} className="client-input"></input>
                    <button onClick={this.onClicknew}>Add New</button><br></br>
                    {
                    this.clientList.map((client, i) => {
                        console.log(client,i)
                        return <ClientCardComp key={i} id={client.id} firstName={client.first_name} lastName={client.last_name}/>
                       
                     })
                    }
                </div>
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

export default ClientListComp;