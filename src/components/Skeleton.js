import React from 'react';

const Skeleton = () => {   
  return(                
    <div className='skeleton-column'>              
      <div className='skeleton-user'>
        <div className='skeleton-user__avatar'>
          <div className="skeleton-user__avatar__img"></div>
        </div>        
        <div className="skeleton-user__name"></div>
        <div className="skeleton-user__title"></div>                    
      </div>         
    </div>       
  )
}

export default Skeleton



