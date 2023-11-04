import React from 'react'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'
import {useSelector } from 'react-redux';
import Products from './components/Products';


function App() {


  const {isOpen} = useSelector(state => state)

  return (
    <>
    <Modal actionLabel={"Submit"} title={"Hello World"} isOpen = {isOpen}/>

    <Navbar />

    <div className="pb-20 pt-28">
    <Products/> 
        </div>
      

    </>
    
    
  )
}

export default App