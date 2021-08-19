import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const pageHTML = (pageNumber, totalPages, onPageClick) => {
    let html =[];
    for(var i = 1; i<=totalPages; i++) {
        html.push(<a className={pageNumber ===i && "active"} href="#" onClick={onPageClick} >{i}</a>);
    }
    return html;
}


const Layout = ({children, onPageClick, pageNumber, total, totalPages}) => {

    
    return (
        <div className="layout">
            <Header total={total}/>  
         
            <main >
            {children}
            </main>
           
            <div className="pagination">
            <a href="#" onClick={()=> onPageClick('back')}>&laquo;</a>
            {/*<a className={pageNumber ===1 && "active"} href="#" onClick={()=> onPageClick(1)}>1</a>*/}
            {pageHTML(pageNumber, totalPages, onPageClick)}
            <a href="#" onClick={()=> onPageClick('next')}>&raquo;</a>
        </div>

            <Footer />

        </div>
	)
}

export default Layout