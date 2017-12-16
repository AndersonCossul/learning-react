import React from 'react'

const validation = (props) => {
  let sizeInfo = "Text too short (min 5 chars)"

  if (props.enteredTextLength >= 5) {
    sizeInfo = "Text long enough"
  }

  return (
    <p>{sizeInfo}</p>
  )
}

export default validation