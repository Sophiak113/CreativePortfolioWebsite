import React from 'react'

const TitleBar = (props) => {
  return (
        <div className='title'id={props.id}>
            Universe : {props.page}
    </div>
  )
}

export default TitleBar
