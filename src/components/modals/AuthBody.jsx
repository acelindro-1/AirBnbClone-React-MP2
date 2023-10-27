import React from 'react'
import { useSelector } from 'react-redux';
import Input from '../inputs/Input';
import Heading from '../Heading';
import CategoryInput from '../inputs/CategoryInput';
import { categories } from '../navbar/Categories';

export const categories1 = [
  {
    label: 'Beach',
  //   icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
  //   icon: GiWindmill,
    description: 'This property is has windmills!',
  },
  {
    label: 'Modern',
  //   icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Countryside',
  //   icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Pools',
  //   icon: TbPool,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Islands',
  //   icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Lake',
  //   icon: GiBoatFishing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Skiing',
  //   icon: FaSkiing,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Castles',
  //   icon: GiCastle,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Caves',
  //   icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'Camping',
  //   icon: GiForestCamp,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Arctic',
  //   icon: BsSnow,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Desert',
  //   icon: GiCactus,
    description: 'This property is in the desert!'
  },
  {
    label: 'Barns',
  //   icon: GiBarn,
    description: 'This property is in a barn!'
  },
  {
    label: 'Lux',
  //   icon: IoDiamond,
    description: 'This property is brand new and luxurious!'
  }
]

function AuthBody({}) {

    const {title} = useSelector(state => state)

    if(title=="Register"){
        return (
      
            <div className="flex flex-col gap-4">

<Heading
        Title={"Welcome to Airbnb"}
        subtitle={"Create an account!"}
      />

<Input
Plceholder="Email"
        id="email"
        label="Email"
        
        // disabled={isLoading}
        // register={register}
        // errors={errors}
        // required
      />
      <Input
       Plceholder="Name"
        id="name"
        label="Name"
       
        // disabled={isLoading}
        // register={register}
        // errors={errors}
        // required
      />
      <Input
       Plceholder="Password"
        id="password"
        label="Password"
        type="password"
       
        // disabled={isLoading}
        // register={register}
        // errors={errors}
        // required
      />
      
      <label 
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
        `}
      ></label>
                

            </div>
    
          )
    }
    else if(title=="Login") {
        return(
            <div className="flex flex-col gap-4">
            <Heading
              Title="Welcome back"
              subtitle="Login to your account!"
            />
            <Input
              id="email"
              label="Email"
              Plceholder="Email"
              // disabled={isLoading}
              // register={register}  
              // errors={errors}
              // required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              Plceholder="Password"
              // disabled={isLoading}
              // register={register}
              // errors={errors}
              // required
            />
          </div>
        )
  
    }
    else if(title=="Rental"){
      return(
        <div className="flex flex-col gap-8">
        <Heading
          Title="Which of these best describes your place?"
          subtitle="Pick a category"
        />
        <div 
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            gap-3
            max-h-[50vh]
            overflow-y-auto
          "
        >
          {categories.map((item) => (
            <div key={item.label} className="col-span-1">
              <CategoryInput
                // onClick={(category) => 
                //   setCustomValue('category', category)}
                // selected={category === item.label}
          
                label={item.label}
                // icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>

      )
   
    }
}

export default AuthBody