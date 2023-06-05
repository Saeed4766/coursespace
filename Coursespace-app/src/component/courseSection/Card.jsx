import React from 'react'
import ratingStar from '../../assets/images/ratingStar.jpg'
import arrowbtn from '../../assets/images/arrowbtn.png'

const Card = (props) => {
    
  return (
    // <div>
    //     <div className="card-wrapper" style={{display:'block',justifyContent:'center', alignItems:'center', gap:'1rem'}}>
    //         <img src={props.image} alt="" className='img-design' style={{width:'15rem', height:'15rem', borderRadius:'.9rem'}}/>  
    //         <p style={{marginTop:'1.5rem', fontSize:'1.2rem', lineHeight:'1.4', overflow:'hidden'}}>{props.title}</p>
    //         <span><img src={ratingStar} alt="" className='star-icon' style={{width: '7rem', height:'3rem'}}/></span>
    //         <span>{props.rating}</span>

    //         <div className='cost-course' style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
    //             <p><span>${props.price}</span>/Course</p>
    //             <img src={arrowbtn} alt="" className='arrowbtn' style={{width:'2rem', height:'2rem'}}/>
    //         </div>
    //     </div>
    // </div>
      <div>
          
           <div className="card-wrapper" style={{ display:'flex', justifyContent:'center', gap:'.5rem'}}>
              
              <div className="card" >
                  <img src={props.image} alt="" className='img-design' style={{width:'17rem', height:'16rem', borderRadius:'.9rem'}}/>
                  
                  <div className="title">
                      <p style={{marginTop:'1.5rem', fontSize:'1.2rem', lineHeight:'1.4', overflow:'hidden'}}>{props.title}</p>
                  </div>

                  <div className="ratingstar">
                      <img src={ratingStar} alt="" className='star-icon' style={{width: '9rem', height:'3rem'}}  /> 
                      {/* <span>{props.rating}</span> */}
                  </div>

                  <div className="price-course" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'16rem'}} >
                      <p style={{color:'#127C71',fontSize:'1.4rem',lineHeight:'1.4', fontWeight:'600'}}>${props.price}</p>
                      <img src={arrowbtn} alt="" className='arrowbtn' style={{width:'2rem', height:'2rem', backgroundColor:'#127C71'}}/>
                  </div>
                 

              </div>
           </div>
      </div>
  )
}

export default Card
