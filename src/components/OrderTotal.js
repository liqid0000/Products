import React from 'react';
import { connect } from 'react-redux';

export const OrderTotal = (props) => {
  const {
    orderTotal
  } = props

  return (
    <div className="at-section">
      <div className="at-section__order">Order Total: {orderTotal}</div>
    </div>
  )
}

const mapStateToProps = ({productList}) => ({      
  orderTotal: productList.orderTotal,   
});
  
  
  
export default connect(mapStateToProps)(OrderTotal);
  
