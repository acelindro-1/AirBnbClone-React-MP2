import React from 'react'
import ListingImg from './listings/ListingImg'
import Container from './Container'

export const listImages = [
    {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/arctic.jpg'
      },
      {
        label: 'Barns',
      //   icon: IoDiamond,
      imgLoc: '../../src/assets/images/barns.jpeg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/beach.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/camping.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/castle.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/cave.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/countryside.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/desert.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/island.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/lakes.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/lux.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/modern.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/pools.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/skiing.jpg'
      },
      {
        label: 'Arctic',
      //   icon: GiBarn,
        imgLoc: '../../src/assets/images/windmill.jpg'
      },
      
]

function Images({}) {
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
      {listImages.map((item) => (
        <ListingImg 
          // key={item.label}
          // label={item.label}
        //   icon={item.icon}
        //   selected={category === item.label}
           imgLoc={item.imgLoc}
        />
      ))}
    </div>

    </Container>
  )
}

export default Images