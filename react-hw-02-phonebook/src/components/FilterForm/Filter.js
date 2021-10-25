import React from "react";
import propTypes from "prop-types"
// import styles from "./Filter.module.css"

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <label >
        Find contacts by name
        <input 
          type="text"
          
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes={
  value: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired
}