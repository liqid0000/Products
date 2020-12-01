export const addQua = (products) =>{ 
  return products.map((p) => (
    {pid: p.pid, price: p.price, qua: p.min }//Object.assign({qua: product.min}, product)
  ))
}

export const calculateOrderTotal = (products) => {
  console.log(products)
  const newQuas = [...products]
  let total = newQuas.reduce((sum, p) => sum + p.qua*p.price, 0); 
  console.log(Math.round(total * 100) / 100)
  return Math.round(total * 100) / 100;
}

export const updateItemQua = (productsQuantity, pid, qua) =>{ 
  const newProductsQuantity = [...productsQuantity]
  const itemIndex = productsQuantity.findIndex(product => product.pid === pid ); 
  newProductsQuantity[itemIndex].qua = qua     
  return newProductsQuantity;    
}