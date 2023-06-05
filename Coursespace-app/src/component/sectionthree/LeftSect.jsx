import React from 'react'
import homefeature from '../../assets/images/homefeature.png'


const LeftSect = () => {
  return (
    <div className='parent' style={{position:'relative'}}>
        
        <div className="img-wrapper">
             <img src={homefeature} alt="" style={{width:'26rem', height:'29rem'}}/>
        </div>
       

        {/* <div className="lorem" style={{marginBottom:'2rem',width:'12rem', height:'auto',
         boxSizing:'border-box', position:'absolute', bottom:'25rem', left:'17rem', backgroundColor:'white'}}> */}
            <div className="dolor" style={{textAlign:'start', lineHeight:'3rem', color:'grey', 
            position:'absolute', top:'4rem', left:'17rem', background:'white' ,width:'12rem', paddingLeft:'2rem' }}>
                <h3 style={{color:'black'}}>Lorem ipsum dolor</h3>
               
               <div>
                    <p>UI/UI Design</p>
                    <div style={{width:'7rem', height:'.4rem', backgroundColor:'#f303ff', borderRadius:'2rem'}}></div>
               </div>
               <div>
                    <p>Mobile Development</p>
                    <div style={{width:'4rem', height:'.4rem', backgroundColor:'#26e8bd ', borderRadius:'2rem'}}></div>
               </div>
               <div>
               <p>Web Development</p>
               <div style={{width:'5.5rem', height:'.4rem', backgroundColor:'#0063ff', borderRadius:'2rem'}}></div>
               </div>
                
                
            </div>
        {/* </div> */}

        <div className="loremCent" style={{width:'12rem', height:'auto', border:'2px solid white', 
        boxSizing:'border-box', position:'absolute', bottom:'10rem', right:'18rem', backgroundColor:'white' }}>
            <div className='sm-lorem' style={{textAlign:'center', lineHeight:'2rem', color:'grey' }}>
                <h3 style={{color:'black'}}>Lorem ipsum</h3>
                <p>Lorem ipsum</p>
            </div>
            <div style={{width:'6rem', height:'6rem', borderRadius:'50%', border:'3px solid #32dc88', display:'flex', 
            justifyContent:'center', alignItems:'center', marginLeft:'2.6rem'}}>
                <p>75%</p>
            </div>
        </div>
    </div>
  )
}

export default LeftSect
