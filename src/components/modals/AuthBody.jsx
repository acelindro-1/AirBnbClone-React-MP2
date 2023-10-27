import React from 'react'
import { useSelector } from 'react-redux';
import Input from '../inputs/Input';
import Heading from '../Heading';
import CategoryInput from '../inputs/CategoryInput';
import { categories } from '../navbar/Categories';

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
    else if(title=="Airbnb your home!"){
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