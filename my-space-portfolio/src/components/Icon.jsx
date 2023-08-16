import React from 'react'

const Icon = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} width={props.width} height={props.height}
      style={props.style} />
    </div>
  )
}

export default Icon
