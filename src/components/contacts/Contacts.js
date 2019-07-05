import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  // constructor() {
  //   super();
  // }

  // deleteContact = id => {
  //   const { contacts } = this.state;

  //   const newContacts = contacts.filter(contact => contact.id !== id);

  //   this.setState({
  //     contacts: newContacts
  //   });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <>
              {contacts.map(contact => (
                // <h1>{contact.name}</h1>
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </>
          );
        }}
      </Consumer>
    );
    //const { contacts } = this.state;
    // return (
    //   <React.Fragment>
    //     {contacts.map(contact => (
    //       // <h1>{contact.name}</h1>
    //       <Contact
    //         key={contact.id}
    //         name={contact.name}
    //         email={contact.email}
    //         phone={contact.phone}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       />
    //     ))}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
