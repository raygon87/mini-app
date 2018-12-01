import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClientListComp from './Components/ClientListComp/ClientListComp';
import InvoiceComp from './Components/InvoiceComp/InvoiceComp';

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: '',
      searchField: '',
      clients: ''
    }
    
    this.clients = 
      fetch(`http://localhost:5000/clients`)
      .then(response => response.json())
      .then(data => {
        this.clients = data.clients
      })
      .catch(err => console.log(err,'error'))
  }

  onClickClients = () => {
    this.setState({ display: 'clients' });
  }

  onClickInv = () => {
    this.setState({ display: 'invoices' });
  }


  render() {
    let toShow;
    if(this.state.display === 'clients') {
      toShow = 
        <div className="container">
            <ClientListComp clients={this.clients}/>
        </div>
    } else if (this.state.display === 'invoices') {
      toShow = 
        <div className="container">
          <InvoiceComp name="invoices"/>
        </div>
    }; 
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="body">
          <div className="headings">
            <h1 onClick={this.onClickClients}>Clients</h1>
            <h1 onClick={this.onClickInv}>Invoices</h1>
          </div>
          
          {/* show clientlist or invoicde */}
          <div> {toShow} </div>
        </div>
      </div>
      
    );
  }
}

export default App;
