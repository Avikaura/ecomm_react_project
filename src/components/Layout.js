import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'




const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>  
         
            <main >
            {children}
            </main>
           
            <div className="pagination">
            <a href="#">&laquo;</a>
            <a class="active" href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
        </div>

            <Footer />

        </div>
	)
}

export default Layout