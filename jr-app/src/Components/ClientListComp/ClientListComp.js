import React, { Component } from 'react';
import ClientCardComp from "../ClientCardComp/ClientCardComp";
import NewClientComp from "../NewClientComp/NewClientComp";
import './ClientListComp.css'


class ClientListComp extends Component {
    constructor(props) {
        super()
        this.state = {
          display: '',
          searchField: '',
        }
    }

    onSearchChange = () => {
        this.setState({input: document.getElementById('searchInput').value})
    }

    onClicknew = () => {
        this.setState({ display: 'new-client-card' });
    }

    render() {
        console.log(this.props.clients)
        let toShow;
        if (this.state.display === 'client-card') {
            toShow = 
            <div className="container">
                <ClientCardComp clients={this.props.clients} name="client-card"/>
            </div>
        } else if (this.state.display === 'new-client-card') {
            toShow = 
            <div className="container">
                <NewClientComp fetchClients={this.props.fetchClients} name="new-client-card"/>
            </div>
        }

        return (
            <div className='clientbox'>
                    {/* <NewClientComp name="new-client-card"/> */}
                    <button onClick={this.onClicknew}>Add New Client</button><br></br>
                    <div> { toShow }</div>
                <div className="clientListContainer">
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