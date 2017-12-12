import React, { Component } from 'react';

class TicketForm extends Component{

    constructor() {
        super();
        this.state = {
            firstName   : "",
            lastName    : "",
            tickets     : 0,
            cardInfo    : ""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.checkValidations = this.checkValidations.bind(this);
        this.clearErrorMessages = this.clearErrorMessages.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        document.getElementById("success").innerHTML = "";
        const fields = Object.keys(this.state);
        if (this.checkValidations(fields)){
            document.getElementById("success").innerHTML = "Order complete!";
        }    
    }

    clearErrorMessages(fields){
        fields.map((field)=>{
            document.getElementById(field+"-error").innerHTML = "";
            document.getElementById(field).style.border = "";
        });
    }

    checkValidations(fields){
        this.clearErrorMessages(fields);
        let isValid = true;
        const elems = document.getElementById("ticketForm").elements;

        fields.map((field)=>{
            let f = elems[field];
            if(f.validity){
                if( !f.validity.valid){
                    isValid = false;
                  document.getElementById(field+"-error").innerHTML = f.validationMessage;
                  document.getElementById(field+"-error").style.color = "#ba3932";
                  document.getElementById(field).style.border = "thin solid #ba3932";
                }
              }
        });

        return isValid;
    }

    handleFieldChange(e) {
        const newState = this.state;
        const currentField = e.target.id;
        newState[currentField] = e.target.value;
        this.setState(newState);
    }

    render(){
        return(
            <div>
            <form id="ticketForm" noValidate onSubmit={this.handleSubmit}>
                <span> First Name <input type="text" id="firstName" onChange={this.handleFieldChange} 
                                        placeholder="Name" value={this.state.firstName}
                                        required /></span>
                <div id ="firstName-error"></div>
                <br/>
                <span> Last Name <input type="text" id="lastName" onChange={this.handleFieldChange} 
                                         placeholder="Last Name" value={this.state.lastName} 
                                         required /></span>
                <div id ="lastName-error"></div>
                <br/>
                <span> Tickets <input type="number" id="tickets" onChange={this.handleFieldChange}
                                        value={this.state.tickets} min="1" max="8"
                                        required /></span>
                <div id ="tickets-error"></div>
                <br/>
                <span> Card Info <input type="text" id="cardInfo" placeholder="1010 8800 1111 1234"
                                        onChange={this.handleFieldChange} value={this.state.cardInfo} 
                                        maxLength="16" minLength="16" pattern="[0-9]{16}"
                                        required /></span>
                <div id ="cardInfo-error"></div>
                <br/>
                <span><button type="submit" id="submit">Place Order</button></span>
                <div id ="success"></div>
            </form>
            </div>
        );
    }
}

export default TicketForm; 