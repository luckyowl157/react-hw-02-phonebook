import React, { Component } from "react";
import styles from "./ContactForm.module.css"

export default class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    this.props.addContact({ name, number });

    this.setState({ name: "", number: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label className={styles.formLabel}>
          Name
            <input
                type="text"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />
        </label>
       
        <label className={styles.formLabel}>
          Number
          <input
            type="tel"
            value={this.state.number}
            name="number"
            onChange={this.handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            />
        </label>
        
        <button type="submit">Add contact</button>
      </form>
    );
  }
}