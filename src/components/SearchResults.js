import React from 'react'
import ProductArray from './ProductArray'

const SearchResult = ({result}) => {
    const ProductStack = result.slice(0,100).map((product) => <ProductArray key={product.prod_name} data={product} />)

    return (

        <div className="container">
            {ProductStack}

            <p id="pageNumber">
               
                {ProductStack.length} {(ProductStack.length === 1) ? `product` : `products`} of {result.length}
            </p>
        </div>
    )
}

export default SearchResult