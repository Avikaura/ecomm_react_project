import React from 'react'
import face from '../img/svgs/facebook.svg'
import inst from '../img/svgs/instagram.svg'
import twit from '../img/svgs/twitter.svg'
import what from '../img/svgs/whatsapp.svg'

const Footer = () => {
    
    return (
        
        <footer className="footer-part">
            
    
        <a href="index.html" className="href-footer"><h1>baggy store</h1></a> 
         <h6>contact</h6>

     <section className="social-icons">

         <ul className="media-contact">
             <li><a href="#"><img src={face} alt="facebook" className="icon-set"/></a></li>
             <li><a href="#"><img src={inst} alt="facebook" className="icon-set"/></a></li>
             <li><a href="#"><img src={twit} alt="facebook" className="icon-set"/></a></li>
             <li><a href="#"><img src={what} alt="facebook" className="icon-set"/></a></li>

             </ul>

             <ul className="footer-contact">

             <li><span className="contact-set">email</span></li>
             <li><span className="contact-set">apps</span></li>
             <li><span className="contact-set">follow us</span></li>
             <li><span className="contact-set">careers</span></li>
             <li><span className="contact-set">sitemap</span></li>
             <li><span className="contact-set">ship worldwide</span></li>
             <li><span className="contact-set">legal notice</span></li>
         </ul>



     </section>

     <h5><b>&copy;</b> worldwide shipping</h5>
      </footer>
    )
}

export default Footer