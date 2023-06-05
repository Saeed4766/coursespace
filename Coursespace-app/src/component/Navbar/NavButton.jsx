import React from 'react'
import Button from '../Button/Button'



const NavButton = ()=>{
    return(
        <div style={{display:'flex',  gap:'1rem'}}>
            <Button saheed = 'Sign In' txtColor='green' bg ='white' />
            <Button saheed = 'Sign Up' txtColor = 'white' bg ='#127C71'/>
            
        </div>
    )
}

export default NavButton