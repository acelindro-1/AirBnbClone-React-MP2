import React from 'react'
import { useSelector } from 'react-redux';
import Button from '../Button';

function AuthFooter() {

    const {title} = useSelector(state => state)
    if(title=='Register'){
        return (
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
          )
    }
    else if(title=='Login'){
        return(
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
        )
    }
}

export default AuthFooter