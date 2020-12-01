import React from 'react'

const GridAt = (props) => {
  return(        
    <div className='at-grid' data-column="3">
      {props.children}
    </div>          
  )
}

export default GridAt