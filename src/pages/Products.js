import React, {useState} from 'react'
import Layout from '../components/Layout'
import SearchResult from '../components/SearchResults'

const products = ({data}) => {

    const [searchState, setSearchState] = useState({
        query: ``,
        minPrice: 0,
        methods: [],
        sort: (a, b) => a.price - b.price
      })


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
    return (
        <Layout>
        <section className="filter">

        <legend className="legend-head">colors</legend>
        <legend className="legend-head">sizes</legend>
        <legend className="legend-head">ratings</legend>
        <legend className="legend-head">collections</legend>
        <legend className="legend-head">materials</legend>



        <legend className="sort">sort</legend>
        </section>

        <SearchResult result={searchResult}/>

        </Layout>
    )
  
}

export default products