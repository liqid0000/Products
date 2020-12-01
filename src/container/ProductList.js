import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/productList';
import GridAt from '../UI/GridAt';
import GridSkeleton from '../UI/GridSkeleton';
import Skeleton from '../components/Skeleton';
import Product from '../components/Product';
import Header from '../components/Header';
import Container from '../UI/Container';
import OrderTotal from '../components/OrderTotal';

const ProductList = (props) => {

  const {
    products,
    isError,
    isLoading,
    performFetchProductList,
  } = props

  const [, setErrorCatch] = useState(null);
  (isError) && setErrorCatch(() => {throw new Error})

  useEffect(() => {
    performFetchProductList();        
  }, [])

  return(
    <Container>      
      <Header />      
      {(isLoading) ? 
        <GridSkeleton>
          {new Array(12).fill(1).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </GridSkeleton>          
      :    
        <>             
          <GridAt>
            {(products) && products.map((product) => (
              <Product key={product.pid}
                product={product}
              />
            ))}
          </GridAt>
          <OrderTotal/>
        </>       
      }           
     </Container>  
  )
}

const mapStateToProps = ({productList}) => ({    
  isLoading: productList.isLoading,
  isError: productList.isError,   
  products: productList.products,   
});

const mapDispatchToProps = dispatch => {
  return {
    performFetchProductList: () => dispatch(actionCreators.performFetchProductList()),           
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
