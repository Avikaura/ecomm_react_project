import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const ProductArray = ({data}) => {

    const {title,bagImage,price,bagName} = data

    const [img, setImg] = useState(``)
  import (`../img/products/${bagImage}`).then((image) => setImg(image.default))

  return (
    <article className="product">
    {/* <a href="product.html" target="_blank"><img src={img} alt={title} className="product-img"/></a>   */}
    <img src={img} alt={title} className="product-img"/>
      <div className="hover-text"><Link to={`/single_product/${data.id}`}>quick view</Link></div>
      <img src="src/img/svgs/favourite.svg" alt="fav" className="fav-icon"/>
      
      <h4>{bagName}    
          <span><img src="src/img/svgs/star.svg" alt="ratings" className="rating-set"/></span>
          <span><img src="src/img/svgs/star.svg" alt="ratings" className="rating-set"/></span>
          <span><img src="src/img/svgs/star.svg" alt="ratings" className="rating-set"/></span>
          <span><img src="src/img/svgs/star.svg" alt="ratings" className="rating-set"/></span></h4>
  <data value="479.85" className="price">${price}</data><br/>
  
     </article>
     
  )
} 
export default ProductArray