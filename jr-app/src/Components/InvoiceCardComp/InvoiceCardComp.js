import React, { Component } from 'react';
import './InvoiceCardComp.css'

class InvoiceCardComp extends Component {
    render() {
        return (
            <div className="invoice-card">
                    <div className="invoice-name">
                        <h3>Invoice Number</h3>
                    </div>
                    <div className="invoice-details">
                        <p>Items: Chairs, Desk, Room</p>
                        <p>Date: 2018-11-26</p>
                        <p>Location: South</p>
                        <p>Total: $100.00</p>
                    </div>
                </div>
        )};
}

export default InvoiceCardComp;