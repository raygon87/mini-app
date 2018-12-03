import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClientListComp from './Components/ClientListComp/ClientListComp';
import InvoiceComp from './Components/InvoiceComp/InvoiceComp';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: '',
      searchField: '',
      clients: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:5000/clients`)
      .then(response => response.json())
      .then(data => this.setState({clients: data.clients}))
      .catch(err => console.log(err,'error'))
  }

  fetchClients = () => {
    fetch(`http://localhost:5000/clients`)
      .then(response => response.json())
      .then(data => this.setState({clients: data.clients}))
      .catch(err => console.log(err,'error'))
  }

  onChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    console.log(this.state.clients)
    const filteredClients = this.state.clients.filter(client => {
        return client.first_name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return !this.state.clients.length ? <h1>Loading</h1> :
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="body">
          <div className="headings">
            <h1>Clients</h1>
          </div>
          <SearchBox searchChange={this.onChange}/>
          <ClientListComp fetchClients={this.fetchClients} clients={filteredClients}/>
        </div>
      </div>
  }
}

export default App;
