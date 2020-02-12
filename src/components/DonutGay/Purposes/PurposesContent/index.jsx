import React, { Component, useState, useEffect } from 'react';
import styles from './styles.module.scss';

export default function(props) {
  const [ isChecked, setCheckBox ] = useState(false); 
  const setChangeCheckBox = () => setCheckBox(!isChecked) 

  return (
    <div className={styles.dropdown_item}>
      <div className={styles.dropdown_item_text}>
        <div className={styles.item_number}>
          {/* ITEM NUMBER SHOULD BE HERE */}
          <p>{props.number}</p>
        </div>
        {/* TEXT PROPS SHOULD BE HERE */}
        <p className={styles.item_text}>{props.text}</p>
      </div>
      <div className={styles.checkbox_test}>
        <input id={props.number} onClick={setChangeCheckBox} type="checkbox" />
        <label htmlFor={props.number}>
          <span />
        </label>
      </div>
    </div>
  )
}
