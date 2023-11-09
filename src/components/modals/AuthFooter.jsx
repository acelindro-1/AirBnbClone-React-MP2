import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import {handleAuthChange, handleCatChange, handleFilterChange, handleImgChange, handleErrorChange, handleLoggedChange, handlePriceChange, handleRegHomeChange, handleTitleChange} from '../../redux/auth';

function AuthFooter({}) {

    const {isOpen, title, regHome, category, img, price, email, name, pw} = useSelector(state => state)
    const dispatch = useDispatch()
    const lest = JSON.parse(localStorage.getItem('products')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];
        
    function addList() {
      
      const newList = {
        id: Math.random() * 100,
        cat: category,
        loc: "Philippines",
        img: img,
        listPrice: price
    }

    localStorage.setItem('products', JSON.stringify([...lest, newList]))
    // dispatch(handleListChange([...list, newList]))
    dispatch(handleAuthChange(!isOpen))
    dispatch(handleTitleChange(""))
    dispatch(handleRegHomeChange("category"))
    dispatch(handleCatChange("Beach"))
    dispatch(handleImgChange("../../src/assets/images/arctic.jpg"))
    dispatch(handlePriceChange("Php 0.00"))
    dispatch(handleFilterChange(""))
    dispatch(handleErrorChange(""))
    }

    const logEm = users.filter(item => item.email === email);  
    const logPw = logEm.filter(item => item.pw === pw);  

    function login1() {
      // logPw.map(userpw => userpw.pw == pw ? 
      //   (localStorage.setItem('logged', JSON.stringify(email)), dispatch(handleAuthChange(!isOpen)), dispatch(handleLoggedChange(email))) 
      // : (dispatch(handleAuthChange(!isOpen)), dispatch(handleLoggedChange(email))))
      
      ( logPw != "" ? 
        (localStorage.setItem('logged', JSON.stringify(email)), dispatch(handleAuthChange(!isOpen)), dispatch(handleLoggedChange(email)), dispatch(handleErrorChange(""))) 
      : (dispatch(handleErrorChange("Invalid credential entered."))))
  
    }

    const newUser = {
      id: Math.random() * 100,
      email: email,
      name: name,
      pw: pw,
  }

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
                    onClick={()=>  {localStorage.setItem('users', JSON.stringify([...users, newUser])), localStorage.setItem('logged', JSON.stringify(email)), dispatch(handleAuthChange(!isOpen)), dispatch(handleLoggedChange(email))}}
                    
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
                onClick=  { () => {dispatch(handleTitleChange("Login"))}}
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
              // onClick={()=>logPw === "" ? {login0}:{login1}}
              onClick={login1}
              // onClick={login0}
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
                onClick=  { () => {dispatch(handleTitleChange("Register"))}}
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
          
            onClick={() => {dispatch(handleAuthChange(!isOpen))}}
            label="Close"
            outline
          />

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
            onClick={() => {dispatch(handleRegHomeChange("images"))}}
          />
        </div>
          </div>

        )
      }
      // else if (regHome=='info'){
      //   return(
      //     <div className="flex flex-col gap-2 p-6">
      //     <div 
      //     className="
      //       flex 
      //       flex-row 
      //       items-center 
      //       gap-4 
      //       w-full
      //     "
      //   >
      //   <Button 
      //         // disabled={disabled} 
      //         label={"Back"} 
      //         onClick={() => {dispatch(handleRegHomeChange("location"))}}
      //         outline
      //       />  
    
      //     <Button 
      //       // disabled={disabled} 
      //       label={"Next"} 
      //       onClick={() => {dispatch(handleRegHomeChange("images"))}}
      //     />
      //   </div>
      //     </div>

      //   )
      // }
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
              onClick={() => {dispatch(handleRegHomeChange("location"))}}
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
      // else if (regHome=='description'){
      //   return(
      //     <div className="flex flex-col gap-2 p-6">
      //     <div 
      //     className="
      //       flex 
      //       flex-row 
      //       items-center 
      //       gap-4 
      //       w-full
      //     "
      //   >
      //   <Button 
      //         // disabled={disabled} 
      //         label={"Back"} 
      //         onClick={() => {dispatch(handleRegHomeChange("images"))}}
      //         outline
      //       />  
    
      //     <Button 
      //       // disabled={disabled} 
      //       label={"Next"} 
      //       onClick={() => {dispatch(handleRegHomeChange("price"))}}
      //     />
      //   </div>
      //     </div>

      //   )
      // }
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
              onClick={() => {dispatch(handleRegHomeChange("images"))}}
              outline
            />  
    
          <Button 
            // disabled={disabled} 
            label={"Create"} 
            onClick={() => {addList()}}
            
          />
        </div>
          </div>
  
        )
      }
   
    }   
}

export default AuthFooter