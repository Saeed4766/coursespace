import { useState } from 'react'
// import {BrowserRouter,Routes, Route} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import Navbar from './component/Navbar/Navbar'
// import Card from './component/MentorsSection/Card'
import Hero from './component/Hero/Hero'
import CourseSect from './component/courseSection/CourseSect'
import Learning from './component/sectionthree/Learning'
import Testimonial from './component/TestimonialSection/Testimonial'
import Mentors from './component/MentorsSection/Mentors'
import Newsletter from './component/TestimonialSection/Newsletter/Newsletter'
import Footer from './component/Footer/Footer'
// import Fallback from './componenetss/Fallback'
// import Signout from './componenetss/Signout'
// import Products from './componenetss/Products'
// import NewProducts from './componenetss/NewProducts'
// import OldProducts from './componenetss/OldProducts'





function App() {
  // const [count, setCount] = useState(0)
 

  return (

    <div>
    
      <Navbar/>
      <Hero/>
      <CourseSect/>
      <Learning />
      <Testimonial/>
      <Mentors />
      <Newsletter/>
      <Footer />
      
    
    
    
    
    </div>
    
    // <Routes>
    //   <Route path='/' element={<Navbar/>} />
    //   <Route path='signup' element={<Signout/>} />
    //   <Route path='/card' element={<Card/>} />
     

    //   <Route path='products' element={<Products/>} >
    //     <Route path='new' element={<NewProducts/>} />
    //     <Route path='old' element={<OldProducts/>} />
    //   </Route>


    //   <Route path='*' element={<Fallback/>} />
    // </Routes>
 
  )
}

export default App

