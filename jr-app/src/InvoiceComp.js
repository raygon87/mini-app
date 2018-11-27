import React, { Component } from 'react';
import "./App.css";
import InvoicecardComp from "./InvoicecardComp";

class InvoiceComp extends Component {
    constructor() {
        super()
        this.state = {
          display: ''
        }
    }

    onClick = () => {
        this.setState({ display: 'invoice-card' });
    }

    render() {
        let toShow;
        if (this.state.display === 'invoice-card') {
            toShow = 
            <div className="container">
                <InvoicecardComp name="invoice-card"/>
            </div>
        }
        return (
            <div className="invoice-cardbox">
                <div className="invoice-header">
                    Invoice Number: <input className="invoice-input"></input>
                    <button type="invoice-submit" onClick={this.onClick}>Submit</button>
                    {/* <button>Add New</button><br></br> */}
                </div>
                <div> { toShow } </div>
            </div>
        );
    }
}

export default InvoiceComp;