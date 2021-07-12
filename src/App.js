import React from 'react'
import Products from './pages/Products'

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
        }
    
    ]

	return (
        <>
            <Products data = {myProducts}/>
        </>
    )
}

export default App