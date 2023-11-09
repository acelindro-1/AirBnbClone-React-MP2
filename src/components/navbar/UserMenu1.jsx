import React from 'react'
import MenuItem from './MenuItem'
import { useDispatch, useSelector } from 'react-redux';
import { handleAuthChange, handleLoggedChange, handleTitleChange } from '../../redux/auth';

function UserMenu1({}) {

    const logged = JSON.parse(localStorage.getItem('logged')) || [];
    const dispatch = useDispatch()
    
  const {isOpen} = useSelector(state => state)

    if(logged == ""){
        return (
            <>
            <MenuItem onClick=  { () => {dispatch(handleAuthChange(!isOpen)), dispatch(handleTitleChange("Login"))}} label="Login" />
            <MenuItem onClick={() => {dispatch(handleAuthChange(!isOpen)), dispatch(handleTitleChange("Register"))}} label="Sign Up" />
            </>
         
          )
    }
    else{
        return(
            <MenuItem onClick=  { () => {  localStorage.setItem('logged', JSON.stringify("")), dispatch(handleLoggedChange(""))}} label="Logout" />
        )
          
        
       
    }

}

export default UserMenu1