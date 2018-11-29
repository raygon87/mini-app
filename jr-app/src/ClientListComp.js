import React, { Component } from 'react';
import "./App.css";
import ClientCardComp from "./ClientCardComp";
import NewClientInputComp from "./NewClientInputComp";


class ClientListComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
          display: '',
          searchField: '',
        }
    }

    // onClick = () => {
    //     this.setState({ display: 'client-card' });
    //     fetch(`http://localhost:5000/client/${this.state.input}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(err => console.log(err,'error'))
    // }

    onSearchChange = () => {
        this.setState({input: document.getElementById('searchInput').value})
    }

    onClicknew = () => {
        this.setState({ display: 'new-client-card' });
      }


    render() {
        const {searchField} = this.state;
        const filteredClient = this.props.clients.filter(client => {
        return client.first_name.includes(searchField);
        });
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

        console.log(this.props.clients)

        return (
            <div className='clientbox'>
                    Search Client: <input id='searchInput'  onChange={this.onSearchChange} className="client-input"></input>
                   
                    <button onClick={this.onClicknew}>Add New</button><br></br>
                    <div> { toShow }</div>
                <div className="client-cardbox">
                    {
                    this.props.clients.map((client, i) => {
                        return <ClientCardComp key={i} id={client.id} firstName={client.first_name} lastName={client.last_name}/>
                     })
                    }
                </div>
            </div>
        );
    }
}

export default ClientListComp;