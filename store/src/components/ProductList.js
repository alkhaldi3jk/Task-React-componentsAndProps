import React from 'react'
import Product from './Product'
import productsData from '../products'

 function ProductList() {

    let dataArray= productsData.map(element =>
        <Product info={element}/>
        )
    
    return (
        <div className="product-List">{dataArray}</div>
    )
}

export default ProductList