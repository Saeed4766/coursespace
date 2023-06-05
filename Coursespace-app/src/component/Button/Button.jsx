import React from 'react'

const Button = ({saheed, txtColor='green', bg = 'white'}) =>{
 
    return(
        <div>
            <button style={{padding:'0.6rem 1.4rem', borderRadius:'.7rem', color:`${txtColor}`, backgroundColor:`${bg}`}} >{saheed}</button>
            
        </div>
    )

}

export default Button