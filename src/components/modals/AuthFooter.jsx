import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { handleAuthChange, handleRegHomeChange, handleTitleChange} from '../../redux/auth';

function AuthFooter({}) {

    const {title, regHome} = useSelector(state => state)
    const dispatch = useDispatch()

    if(title=='Register'){
        return (
          <div className="flex flex-col gap-2 p-6">
            <div 
                  className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  <Button 
                    label={"Continue"} 
                    // onClick={}
                  />
                </div>
      <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button 
              outline 
              label="Continue with Google"
            //   icon={FcGoogle}
            //   onClick={() => signIn('google')} 
            />
            <Button 
              outline 
              label="Continue with Github"
            //   icon={AiFillGithub}
            //   onClick={() => signIn('github')}
            />
            <div 
              className="
                text-neutral-500 
                text-center 
                mt-4 
                font-light
              "
            >
              <p>Already have an account?
                <span 
                //   onClick={onToggle} 
                  className="
                    text-neutral-800
                    cursor-pointer 
                    hover:underline
                  "
                  > Log in</span>
              </p>
            </div>
          </div>

          </div>
      
          )
    }
    else if(title=='Login'){
        return(

          <div className="flex flex-col gap-2 p-6">
          <div 
            className="
              flex 
              flex-row 
              items-center 
              gap-4 
              w-full
            "
          >

            <Button 
              label={"Continue"} 
              // onClick={}
            />
          </div>

          <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button 
              outline 
              label="Continue with Google"
            //   icon={FcGoogle}
            //   onClick={() => signIn('google')}
            />
            <Button 
              outline 
              label="Continue with Github"
            //   icon={AiFillGithub}
            //   onClick={() => signIn('github')}
            />
            <div className="
            text-neutral-500 text-center mt-4 font-light">
              <p>First time using Airbnb?
                <span 
                //   onClick={onToggle} 
                  className="
                    text-neutral-800
                    cursor-pointer 
                    hover:underline
                  "
                  > Create an account</span>
              </p>
            </div>
          </div>
   
        </div>

        
        )
    }
    else if (title=="Airbnb your home!") {
      if(regHome=="category"){
        return(
          <div  className="flex flex-col gap-2 p-6">
          <div 
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            w-full
          "
        >
          
          <Button 
            // disabled={disabled} 
          
            onClick={() => {dispatch(handleRegHomeChange('location'))}}
            label="Next"
          />
        </div>
          </div>
        
        )
      }
      else if (regHome=='location'){
        return(
          <div className="flex flex-col gap-2 p-6">
          <div 
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            w-full
          "
        >
        <Button 
              // disabled={disabled} 
              label={"Back"} 
              onClick={() => {dispatch(handleRegHomeChange("category"))}}
              outline
            />  
    
          <Button 
            // disabled={disabled} 
            label={"Next"} 
            onClick={() => {dispatch(handleRegHomeChange("info"))}}
          />
        </div>
          </div>

        )
      }
      else if (regHome=='info'){
        return(
          <div className="flex flex-col gap-2 p-6">
          <div 
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            w-full
          "
        >
        <Button 
              // disabled={disabled} 
              label={"Back"} 
              onClick={() => {dispatch(handleRegHomeChange("location"))}}
              outline
            />  
    
          <Button 
            // disabled={disabled} 
            label={"Next"} 
            onClick={() => {dispatch(handleRegHomeChange("images"))}}
          />
        </div>
          </div>

        )
      }
      else if (regHome=='images'){
        return(
          <div className="flex flex-col gap-2 p-6">
          <div 
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            w-full
          "
        >
        <Button 
              // disabled={disabled} 
              label={"Back"} 
              onClick={() => {dispatch(handleRegHomeChange("info"))}}
              outline
            />  
    
          <Button 
            // disabled={disabled} 
            label={"Next"} 
            onClick={() => {dispatch(handleRegHomeChange("description"))}}
          />
        </div>
          </div>

        )
      }
      else if (regHome=='description'){
        return(
          <div className="flex flex-col gap-2 p-6">
          <div 
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            w-full
          "
        >
        <Button 
              // disabled={disabled} 
              label={"Back"} 
              onClick={() => {dispatch(handleRegHomeChange("images"))}}
              outline
            />  
    
          <Button 
            // disabled={disabled} 
            label={"Next"} 
            onClick={() => {dispatch(handleRegHomeChange("price"))}}
          />
        </div>
          </div>

        )
      }
      else if (regHome=='price'){
        return(
          <div className="flex flex-col gap-2 p-6">
        <div 
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            w-full
          "
        >
        <Button 
              // disabled={disabled} 
              label={"Back"} 
              onClick={() => {dispatch(handleRegHomeChange("description"))}}
              outline
            />  
    
          <Button 
            // disabled={disabled} 
            label={"Create"} 
            // onClick={handleSubmit}
          />
        </div>
          </div>
  
        )
      }
   
    }   
}

export default AuthFooter