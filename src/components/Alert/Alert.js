import React from 'react'
import "./Styles.css"
const Alert = ({msg}) => {
  return (
    <p className="alert">
      {msg}
    </p>
  );
}

export default Alert