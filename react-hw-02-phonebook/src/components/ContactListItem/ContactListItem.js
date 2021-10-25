import React from "react";
import propTypes from "prop-types";
// import styles from "./ContactListItem.module.css"

const ContactListItem = ({ name, number, onRemoveContact }) => {
  return (
    <li >
      <p className="TaskList-text">
        {name}: {number}
      </p>
      <button  type="button" onClick={onRemoveContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onRemoveContact: propTypes.func.isRequired
};

export default ContactListItem;