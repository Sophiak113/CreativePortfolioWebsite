import React from 'react'

const TitleBar = (props) => {
  return (
    <div className='title-wrapper'>
      Universe : {props.page}
    </div>
  )
}

export default TitleBar
