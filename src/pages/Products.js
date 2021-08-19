import React, {useState} from 'react'
import Layout from '../components/Layout'
import SearchResult from '../components/SearchResults'

const productsPerPage = 4;

const PRODUCT_RANGE =  {
  '0-150': {min:0, max:150},
  '151-250': {min:151, max:250},
  '251-350': {min:251, max:350},
  '351-500': {min:351, max:500}
}

const products = ({data}) => {

    const [searchState, setSearchState] = useState({
        query: ``,
        minPrice: 0,
        methods: [],
        sort: (a, b) => a.price - b.price
      })

      const [pageNumber, setPageNumber] = useState(1);
      const [range, setRange] = useState('select');

      const {query, minPrice, sort} = searchState

      const sortCost = (event) => {
           
        setSearchState({
          ...searchState,
          minPrice: Number(event.target.value),
        })
      }


    const searchResult = data
    .filter(({price}) => price >= minPrice)
    .filter(({bagName}) => bagName.toUpperCase().includes(query.toUpperCase()))
    .filter(({filters}) => searchState.methods.length === 0 || 
    filters.filter((method) => searchState.methods.includes(method)).length > 0)
    .sort(sort)
  
   const changeState = (event) => {
    

    setSearchState({
      ...searchState,
      query: event.target.value
    })
 }

   
const swapGoal = ({target}) => {

   let sorting
      if (target.value === "0") {
      sorting = (a, b) => a.price - b.price
     } else if (target.value === "1") {
       sorting = (a, b) => b.price - a.price
     }

     setSearchState({
      ...searchState,
      sort: sorting
     })
 }

  const targetState = ({target}) => {
    
     if (target.checked) {
      setSearchState({
        ...searchState,
        methods: [...searchState.methods, target.value]
      })
    } else {
     setSearchState({
        ...searchState,
       methods: searchState.methods.filter((method) => method !== target.value)
      })
    }
  }

  let filteredResults  
  if(range !== 'select') {
    const {min, max} = PRODUCT_RANGE[range]
    filteredResults = searchResult.filter(product => product.price >= min && product.price <= max);
  }
  else {
    filteredResults = searchResult;
  }

  const paginatedResult = pageNumber ===1 ? filteredResults.slice(0,productsPerPage) : filteredResults.slice((pageNumber*productsPerPage)-productsPerPage, (pageNumber*productsPerPage))
  const totalPages = Math.ceil(filteredResults.length/productsPerPage);
    return (
        <Layout onPageClick={page => {
          if(page ==='back' && pageNumber > 1)
          {
            setPageNumber(pageNumber - 1);
          }
          else if (page==='next' && pageNumber < totalPages)
          {
             setPageNumber(pageNumber +1)
          }
          else if( page.target && typeof(parseInt(page.target.innerText)) === 'number') {
            setPageNumber(parseInt(page.target.innerText))
          }
        }}
        pageNumber={pageNumber}
        totalPages={totalPages}
        total={filteredResults && filteredResults.length}
        >
        <section className="filter">
        <select name="prices" class="price-filter" onChange={event=>{setRange(event.target.value); setPageNumber(1)}} value={range}>
          <option value='select'>Select Price Range</option>
          <option value="0-150">$0-$150</option>
          <option value="151-250">$151-$250</option>
          <option value="251-350">$251-$350</option>
          <option value="351-500">$351-$500</option>
        </select>
        <input type='submit' onClick={()=>{setRange('select')}} value='Clear Filters' class="clear-filter"/>


        <legend className="sort">sort</legend>
        </section>

        <SearchResult result={paginatedResult} total={filteredResults && filteredResults.length}/>

        </Layout>
    )
  
}

export default products