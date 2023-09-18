import React from 'react'
import "./Alert.css"

const Alert = ( props ) => {
  const { type, text } = props;

  return (
    <div className={`alert alert-${type}`}>{ text }</div>
  )
}

export default Alert
