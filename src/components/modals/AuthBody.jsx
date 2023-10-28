import React from 'react'
import { useSelector } from 'react-redux';
import Input from '../inputs/Input';
import Heading from '../Heading';
import CategoryInput from '../inputs/CategoryInput';
import { categories } from '../navbar/Categories';
import Map from '../Map';
import Counter from '../inputs/Counter';

function AuthBody({}) {

    const {title, regHome} = useSelector(state => state)

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
      if(regHome=="category"){

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
      else if(regHome=="location"){
        return(
          <div className="flex flex-col gap-8">
          <Heading
            Title="Where is your place located?"
            subtitle="Help guests find you!"
          />
          {/* <CountrySelect 
            value={location} 
            onChange={(value) => setCustomValue('location', value)} 
          /> */}
          <Map/>
        </div>
        )
     
      }
      else if(regHome=="info"){
        return(
          <div className="flex flex-col gap-8">
          <Heading
            Title="Share some basics about your place"
            subtitle="What amenitis do you have?"
          />
          <Counter 
            // onChange={(value) => setCustomValue('guestCount', value)}
            // value={guestCount}
            title="Guests" 
            subtitle="How many guests do you allow?"
          />
          <hr />
          <Counter 
            // onChange={(value) => setCustomValue('roomCount', value)}
            // value={roomCount}
            title="Rooms" 
            subtitle="How many rooms do you have?"
          />
          <hr />
          <Counter 
            // onChange={(value) => setCustomValue('bathroomCount', value)}
            // value={bathroomCount}
            title="Bathrooms" 
            subtitle="How many bathrooms do you have?"
          />
        </div>
        )
      }
      else if(regHome=="images"){
        return(
          <div className="flex flex-col gap-8">
          <Heading
            Title="Add a photo of your place"
            subtitle="Show guests what your place looks like!"
          />
          {/* <ImageUpload
            onChange={(value) => setCustomValue('imageSrc', value)}
            value={imageSrc}
          /> */}
        </div>
        )

      }
      else if(regHome=="description"){
        return(
          <div className="flex flex-col gap-8">
          <Heading
            Title="How would you describe your place?"
            subtitle="Short and sweet works best!"
          />
          <Input
            id="title"
            label="Title"
            // disabled={isLoading}
            // register={register}
            // errors={errors}
            // required
          />
          <hr />
          <Input
            id="description"
            label="Description"
            // disabled={isLoading}
            // register={register}
            // errors={errors}
            // required
          />
        </div>
        )

      }
      else if(regHome=="price"){
        return(
          <div className="flex flex-col gap-8">
          <Heading
            Title="Now, set your price"
            subtitle="How much do you charge per night?"
          />
          <Input
            id="price"
            label="Price"
            formatPrice 
            type="number" 
            // disabled={isLoading}
            // register={register}
            // errors={errors}
            // required
          />
        </div>
        )

      }

   
    }
}

export default AuthBody