import React from 'react'

const userInput = (props) => {
  const style = {
    display: 'block',
    margin: '20px auto',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '25px',
    outline: 'none'
  }

  return (
    <input
      type="text"
      style={style}
      onChange={props.changed}
      value={props.username}/>
  )
}

export default userInput