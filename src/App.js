import React from 'react'
import Products from './pages/Products'
import ProductsContext from '../context/products'
import Single_product from './pages/Single_product'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'


const App = () => {
    const myProducts =[

        {
            title:'Pochette',
            price:479.85,
            bagImage:'3.jpg',
            bagName:'Pochette'
        
        },
        
        {
            title:'Passy',
            price:235.50,
            bagImage:'15.jpg',
            bagName:'Passy'
        },
    
        {
            title:'mini-tote',
            price:200.00,
            bagImage:'41.jpg',
            bagName:'Mini-Tote'
        },
    
        {
            title:'Tote',
            price:350.00,
            bagImage:'29.jpg',
            bagName:'Tote'
        },
    
        {
            title:'Mini Douphine',
            price:250.00,
            bagImage:'50.jpg',
            bagName:'Mini Douphine'
        },
    
        {
            title:'Vanity',
            price:455.00,
            bagImage:'16.jpg',
            bagName:'Vanity'
        },
    
        {
            title:'Palm Springs',
            price:125.67,
            bagImage:'8.jpg',
            bagName:'Palm Springs'
        },
    
        {
            title:'Graceful',
            price:344.50,
            bagImage:'4.jpg',
            bagName:'Graceful'
        },
    
        {
            title:'Carry It',
            price:340.00,
            bagImage:'40.jpg',
            bagName:'Carry It'
        },
    
        {
            title:'Pithu',
            price:150.00,
            bagImage:'55.jpg',
            bagName:'Pithu'
        },
    
        {
            title:'Savage Pink',
            price:425.50,
            bagImage:'56.jpg',
            bagName:'Savage Pink'
        },
    
        {
            title:'Clutch',
            price:230.00,
            bagImage:'58.jpg',
            bagName:'Clutch'
        },

        {
            title:'Side-Bag',
            price:140.00,
            bagImage:'bag9.jpg',
            bagName:'Side-Bag'
        },
    
        {
            title:'Claires',
            price:250.00,
            bagImage:'bag9.jpg',
            bagName:'Claires'
        },
    
        {
            title:'Pink Rise',
            price:225.50,
            bagImage:'bag11.jpg',
            bagName:'Pink Rise'
        },
    
        {
            title:'Chain Bar',
            price:235.00,
            bagImage:'bag4.jpg',
            bagName:'Chain Bar'
        },

        {
            title:'It spring Carry',
            price:400.20,
            bagImage:'bag5.jpg',
            bagName:'It spring Carry'
        },
    
        {
            title:'Large Tote',
            price:155.75,
            bagImage:'bag6.jpg',
            bagName:'Large Tote'
        },
    
        {
            title:'Pink Blossom',
            price:325.50,
            bagImage:'bag7.jpg',
            bagName:'Pink Blossom'
        },
    
        {
            title:'Mini Side Clutch',
            price:130.00,
            bagImage:'bag8.jpg',
            bagName:'Mini Side Clutch'
        }
    
    ]

	return (
        <>
            {/* <Products data = {myProducts}/> */}
            <Router>
         <Switch>
           
           <Switch>
           <ProductsContext.Provider value={myProducts}>
             <Route exact path="/"> <Products data = {myProducts} /></Route>
             <Route  path="*"><Single_product /></Route>
             <Redirect to="/" />
             </ProductsContext.Provider>
           </Switch>
           
          </Switch>
       </Router>
        </>
    )
}

export default App