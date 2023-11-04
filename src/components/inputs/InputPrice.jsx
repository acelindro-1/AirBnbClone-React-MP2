import React from 'react'
import { useDispatch } from 'react-redux'
import { handlePriceChange } from '../../redux/auth'


function InputPrice({Plceholder}) {

    const dispatch = useDispatch()

    function handleInputChange(e) {
        if(e.target.value==""){
          dispatch(handlePriceChange("Php 0.00"))  
        }
        else{
          dispatch(handlePriceChange("Php " + e.target.value))
        }

        
    }

  return (
    <input
    // id={id}
    // disabled={disabled}
    // {...register(id, { required })}
    placeholder = {Plceholder}
    onChange={handleInputChange}
    // type={type}
    className={`
    peer
    w-full
    p-4
    pt-6 
    font-light 
    bg-white 
    border-2
    rounded-md
    outline-none
    transition
    disabled:opacity-70
    disabled:cursor-not-allowed
    `}
/>
  )
}

export default InputPrice