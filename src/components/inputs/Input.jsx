import React from 'react'

function Input({Plceholder}) {
  return (
    <input
    // id={id}
    // disabled={disabled}
    // {...register(id, { required })}
    placeholder = {Plceholder}
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

export default Input