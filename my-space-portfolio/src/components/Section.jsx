import React from 'react'

const Section = (props) => {
  return (
    <div className='section' id={props.id}>
      <p>{props.content}</p>
    </div>
  )
}

export default Section
