import React from 'react'

function CategoryInput({label}) {
    return ( 
        <div
        //   onClick={() => onClick(label)}
          className={`
            rounded-xl
            border-2
            p-4
            flex
            flex-col
            gap-3
            hover:border-black
            transition
            cursor-pointer
    
          `}
        >
          {/* <Icon size={30} /> */}
          <div className="font-semibold">
            {label}
          </div>
        </div>
       );
}

export default CategoryInput