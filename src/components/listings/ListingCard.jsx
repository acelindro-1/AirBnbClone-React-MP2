import React from 'react'
import { useSelector } from 'react-redux';

function ListingCard({
    id,
    lCat,
    lLoc,
    lImg,
    lPrice,
    
}) {
   
  const {filter} = useSelector(state => state)
  

    return (
        <div 
        //   onClick={() => router.push(`/listings/${data.id}`)} 
          className="col-span-1 cursor-pointer group"
        >
          <div className="flex flex-col gap-2 w-full">
            <div 
              className="
                aspect-square 
                w-full 
                relative 
                overflow-hidden 
                rounded-xl
              "
            >
              <img
              
                className="
                  object-cover 
                  h-full 
                  w-full 
                  group-hover:scale-110 
                  transition
                "
                src={lImg}
                alt="Listing"
              />
              <div className="
                absolute
                top-3
                right-3
              ">
                {/* <HeartButton 
                  listingId={data.id} 
                  currentUser={currentUser}
                /> */}
              </div>
            </div>
            <div className="font-semibold text-lg">
              {/* {location?.region}, {location?.label} */}
            </div>
            <div className="font-light text-neutral-500">
              {/* {reservationDate || data.category} */}
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold">
                {lPrice}
              </div>
              {/* {!reservation && (
                <div className="font-light">night</div>
              )} */}
            </div>
            {/* {onAction && actionLabel && (
            //   <Button
            //     disabled={disabled}
            //     small
            //     label={actionLabel} 
            //     onClick={handleCancel}
            //   />
            )} */}
          </div>
        </div>
       );
}

export default ListingCard