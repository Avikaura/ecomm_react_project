import React from 'react'

const Header = ({total}) => {

    return (
        
         <header className="header-part">
    
    {/* <!--MENU/LOGO--> */}

    <section className="top-bar-menu">

    <ul className="menu-logo">
        <li>
            <img src="./src/img/svgs/list.svg" alt="The menu bar" className="set-menu" onClick="myFunction()"/>
            <div className="myLinks" id="myLinks">
                <a href="#">new arrivals</a>
                <a href="#">women</a>
                <a href="#">men</a>
                <a href="#">profile</a>
                <a href="#">contact</a>
                <a href="#">sign in</a>
                 
              </div>
        </li>
        <li><img src="./src/img/svgs/heart.svg" alt="To add product in favourites" className="set-fav" /></li>
        <li>
            <a href="index.html"><img src="./src/img/logo.svg" alt="The webstore is for handbags" className="logo"/></a>
        </li>
        <li>
            <img src="./src/img/svgs/user.svg" alt="user-profile" className="user-contact"/>
        </li>
        <li>
            <img src="./src/img/svgs/shopping-cart.svg" alt="Add to bag" className="cart"/>
        </li>
    </ul>
    </section>

    {/* <!--SEARCH BAR--> */}

    <section className="search-bar-menu">

        <a href="index.html"><img src="./src/img/logo.svg" alt="The webstore is for handbags" className="logo1"/></a>

    
        <form>
            <input type="search" placeholder="         search 'spring edition' here" autoComplete="off" id="filterName"/>
        </form>

        <ul className="menu">
            <li><a href="#" className="menu_link">new</a>
            <ul className="menu2">
                <li><a href="#" className="menu2_link">
                    new arrivals</a></li>
                <li><a href="#" className="menu2_link">
                       collections</a></li>
                <li><a href="#" className="menu2_link">
                    spring sale</a></li>
                <li><a href="#" className="menu2_link">
                    brands</a></li>
            </ul></li>
            <li><a href="#" className="menu_link">women</a>
                <ul className="menu2">
                    <li><a href="#" className="menu2_link">
                        jewelry</a></li>
                    <li><a href="#" className="menu2_link">
                           accessories</a></li>
                    <li><a href="#" className="menu2_link">
                        shoes</a></li>
                    <li><a href="#" className="menu2_link">
                        perfumes</a></li>
                </ul>
                
            </li>
            <li><a href="#" className="menu_link">men</a>
                <ul className="menu2">
                    <li><a href="#" className="menu2_link">
                        wallets</a></li>
                    <li><a href="#" className="menu2_link">
                           accessories</a></li>
                    <li><a href="#" className="menu2_link">
                        shoes</a></li>
                    <li><a href="#" className="menu2_link">
                        perfumes</a></li>
                </ul>
            </li>
            <li><a href="#" className="menu_link">profile</a>
                <ul className="menu2">
                    <li><a href="#" className="menu2_link">
                        my account</a></li>
                    <li><a href="#" className="menu2_link">
                           orders</a></li>
                   
                </ul>
            </li>
            <li><a href="#" className="menu_link">contact</a></li>
            <li><a href="#" className="menu_link">sign in</a>
                <ul className="menu2">
                    <li><a href="#" className="menu2_link">
                        create account</a></li>
                    <li><a href="#" className="menu2_link">
                           sign up</a></li>
                    <li><a href="#" className="menu2_link">
                        by google</a></li>
                </ul>
                
            </li>

        </ul>

</section>  


    {/* <!--BAG STYLE HEADING--> */}

    <section className="heading">
        <h2>isolated handbags</h2>
        <h3>({total} products)</h3>

    </section>

    
  

</header>
    
    )
}

export default Header