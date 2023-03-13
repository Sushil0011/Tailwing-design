import React from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Mid from './components/Mid'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {
  return (


<div  className='bg-blue-500'>

  
<Header/>

{/* <Router> */}
  {/* <Routes> */}
    {/* <Route path='/' element={<Banner/>}></Route> */}
    {/* <Route path='/about' element={<Mid/>}></Route> */}
{/*  */}
{/* </Routes> */}
{/* </Router> */}
<Banner/>
<Mid/>
<Footer/>
</div>



  



  )
}

export default App