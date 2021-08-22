import React, {useState, useContext} from 'react'
import Layout from '../components/Layout'
import ProductsContext from '../../context/products'
import {useParams} from 'react-router-dom'
import img1 from 'img/products/3.jpg'
import img2 from 'img/products/4.jpg'
import img3 from 'img/products/12.jpg'
import heart from 'img/svgs/heart.svg'
import star from 'img/svgs/star.svg'



const Single_product = ({data}) => {
    const products = useContext(ProductsContext)
    console.log("DAta:",products)
    const {slug} = useParams()
    console.log("slug1:",slug);
    const {title,bagImage,price,bagName} = products.find(product => product.id === slug)
    const [img, setImg] = useState(``)
    import (`../img/products/${bagImage}`).then((image) => setImg(image.default))
   
return (
    <Layout>




<div class="main">
<section class="single-product">
     
    <article class="product-detail" id="product-detail">
        <img src={img1} alt="main product" class="img-set" id="img-set"/>

        <img src={img2} alt="right-view" class="product-view" id="product-view1"/>
        <img src={img3} alt="zoom" class="product-view" id="product-view2"/>
        <img src={img1} alt="left-view" class="product-view" id="product-view3"/>

        


    </article>
</section>

<section class="details">

<article class="description">
    <h4>{title} <span class="wishlist"><img src={heart} alt="Add to wishlist"/></span></h4>
    <data value="479.85" class="price-set">{price}</data>   
    <span class="stock-set">in stock</span>
    <label class="container2"/>
        <input type="checkbox"/>
        <span class="check2"></span>
      
      <label class="container4"/>
      <input type="checkbox"/>
      <span class="check4"></span>
      
</article>


<article class="buttons">
    <label for="availability" class="availability"/>call for availability
    <label for="availability" class="availability1"/>check availability in stores

    <p class="paragraph-detail">The compact pochette handbag in Monogram canvas with a sliding chain is the quintessence of casual chic. A functional day-to-evening bag, it has front and back outside pockets for quick access to essentials as well as two inside pockets.<br/><br/>
        <b>Detailed Features</b><br/>
        9.4 x 6.7 x 4.7 inches<br/>
        (length x height x width)
    </p>
     <ul class="para-list">
       <li>Monogram coated canvas</li> 
       <li>Smooth cowhide-leather trim</li> 
       <li>Microfiber lining</li> 
       <li>Aged gold-color hardware</li> 
       <li>Front pocket</li> 
       <li>Zipped pocket inside</li> 
       <li>Hidden flat pocket inside</li> 
       <li>Back pocket</li>  
       <li>Magnetic closure</li> 
       <li> Leather piping</li>
       <li>Chain:Sliding, not removable</li> 
       <li> Chain drop: 20.1 inches</li>
     </ul>
 
    <p><span><img src={star} alt="ratings" class="rating-set"/></span>
        <span><img src={star} alt="ratings" class="rating-set"/></span>
        <span><img src={star} alt="ratings" class="rating-set"/></span>
        <span><img src={star} alt="ratings" class="rating-set"/></span></p>

    <form>
        <input type="button" value="Add to Cart" onclick="openCart()"/>

        <div class="form-container" id="popup_form">
            <p>one item added to cart!</p>
            <button type="button" class="btn cancel" onclick="closeCart()">Close</button>
        </div>
      
    </form>

    


</article>
</section>
</div>
 
   
    
    <p class="head-recommend">you may also like</p>
    <p class="highlight">recommended</p>
    <section class="products-body" id="pro-body">
        
    <article class="product">
        <img src="img/products/16.jpg" alt="" class="product-img"/>
        <div class="hover-text">quick view</div>
        <img src="img/svgs/favourite.svg" alt="fav" class="fav-icon"/>
        <h4>vanity
            <span><img src={star} alt="ratings" class="rating-set"/></span>
            <span><img src={star} alt="ratings" class="rating-set"/></span>
            <span><img src={star} alt="ratings" class="rating-set"/></span>
            <span><img src={star} alt="ratings" class="rating-set"/></span>
        </h4>
        <data value="455" class="price">$455.00</data>
       </article>
       <article class="product">
        <img src="img/products/40.jpg" alt="" class="product-img"/>
        <div class="hover-text">quick view</div>
        <img src="img/svgs/favourite.svg" alt="fav" class="fav-icon"/>
        <h4>carry it
            <span><img src={star} alt="ratings" class="rating-set"/></span>
            <span><img src={star} alt="ratings" class="rating-set"/></span>
            <span><img src={star} alt="ratings" class="rating-set"/></span>
            <span><img src={star} alt="ratings" class="rating-set"/></span>
            <span><img src={star} alt="ratings" class="rating-set"/></span>
        </h4>
        <data value="340" class="price">$340.00</data>
       </article>
       <article class="product">
        <img src="img/products/50.jpg" alt="" class="product-img"/>
        <div class="hover-text">quick view</div>
        <img src="img/svgs/favourite.svg" alt="fav" class="fav-icon"/>
        <h4>mini douphine </h4>
        <data value="250" class="price">$250.00</data>
       </article>
       <article class="product">
        <img src="img/products/55.jpg" alt="" class="product-img"/>
        <div class="hover-text">quick view</div>
        <img src="img/svgs/favourite.svg" alt="fav" class="fav-icon"/>
        <h4>pithu
            <span><img src={star} alt="ratings" class="rating-set"/></span>
            <span><img src={star} alt="ratings" class="rating-set"/></span>
            <span><img src={star} alt="ratings" class="rating-set"/></span>
            <span><img src={star} alt="ratings" class="rating-set"/></span>
        </h4>
        <data value="150" class="price">$150.00</data>
       </article>

    

   
    
 </section>

 
     </Layout>

)
}

export default  Single_product