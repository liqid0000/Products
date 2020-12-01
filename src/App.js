import React from 'react';

import './style/main.scss';
import ProductList from './container/ProductList';
import ErrorBoundaries from './components/ErrorBoundaries';

const App = () => {

  return (
    <ErrorBoundaries>
      <ProductList />
    </ErrorBoundaries>   
  );

};

export default App
