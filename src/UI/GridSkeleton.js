import React from 'react'

const GridSkeleton = (props) => {
  return(        
    <div className='skeleton-grid' data-column="3">
      {props.children}
    </div>          
  )
}

export default GridSkeleton