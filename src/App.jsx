import React from 'react'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'
import { useSelector } from 'react-redux';

function App() {

  const {isOpen} = useSelector(state => state)

  return (
    <>
    <Modal actionLabel={"Submit"} title={"Hello World"} isOpen = {isOpen}/>

    <Navbar />

    </>
    
    
  )
}

export default App