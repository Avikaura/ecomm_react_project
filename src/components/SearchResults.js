import React from 'react'
import ProductArray from './ProductArray'

const SearchResult = ({result, total}) => {
    const ProductStack = result.slice(0,100).map((product) => <ProductArray key={product.prod_name} data={product} />)

    return (

        <div className="products-body">
            {ProductStack}

            <p id="pageNumber">
               
                {ProductStack.length} {(ProductStack.length === 1) ? `product` : `products`} of {total}
            </p>
        </div>
    )
}

export default SearchResult