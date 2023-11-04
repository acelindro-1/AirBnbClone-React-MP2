import { useSelector } from 'react-redux'
import Container from './Container'
import React from 'react'
import ListingCard from './listings/ListingCard'


function Products() {
  const {list, filter} = useSelector(state => state)

  function filterCat(fcat) {
    list.filter((item) => item.cat === filter)
}

const filtered = list.filter(item => item.cat == filter);

  // return (
  //   <Container>
  //   <div
  //     className="
  //     mt-10
  //     grid 
  //     grid-cols-1 
  //     sm:grid-cols-2 
  //     md:grid-cols-3 
  //     lg:grid-cols-4
  //     xl:grid-cols-5
  //     2xl:grid-cols-6
  //     gap-8
  //   "
  //   >
  //     {list.map((item) => 
  //     (
  //       <ListingCard 
  //         // key={item.label}
  //         // label={item.label}
  //       //   icon={item.icon}
  //       //   selected={category === item.label}
  //       id={item.id}
  //       lCat={item.cat}   
  //       lLoc={item.loc}
  //       lImg={item.img}
  //       lPrice={item.listPrice}
  //       lFilter = {filterCat}
  //       />
  //     ))}
  //   </div>
  //   </Container>
  // )


  if(filter==""){
    return (
      <Container>
      <div
        className="
        mt-10
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      "
      >
        {list.map((item) => 
        (
          <ListingCard 
            // key={item.label}
            // label={item.label}
          //   icon={item.icon}
          //   selected={category === item.label}
          id={item.id}
          lCat={item.cat}   
          lLoc={item.loc}
          lImg={item.img}
          lPrice={item.listPrice}
  
  
          />
        ))}
      </div>
  
      </Container>
    )
  }
  else{
    return (
      <Container>
      <div
        className="
        mt-10
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      "
      >

{filtered.map((item) => 
        (
          <ListingCard 
            // key={item.label}
            // label={item.label}
          //   icon={item.icon}
          //   selected={category === item.label}
          id={item.id}
          lCat={item.cat}   
          lLoc={item.loc}
          lImg={item.img}
          lPrice={item.listPrice}
  
  
          />
        ))}
      </div>
  
      </Container>
    )
  }

}

export default Products