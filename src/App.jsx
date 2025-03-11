import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Ourservice from './Pages/Ourservice'
import Navbar from './Component/Navbar'

import Aboutus from './Pages/Aboutus'
import Inspection from './Pages/Inspection'
import Testing from './Pages/Testing'
import Cladding from './Pages/Cladding'
import Ourproduct from './Pages/Ourproduct'
import Pipefitting from './Pages/Pipefitting'
import Pipes from './Pages/Pipes'
import Flanges from './Pages/Flanges'
import Valves from './Pages/Valves'
import Strainers from './Pages/Strainers'
import Plates from './Pages/Plates'
import Specialitems from './Pages/Specialitems'
import Gallery from './Pages/Gallery'
import Certification from './Pages/Certification'
import Company from './Pages/Company'
import Iso from './Pages/Iso'
import Faqs from './Pages/Faqs'
import Contact from './Pages/Contact'
import Calculator from './Pages/Calculator'

import Footer from './Component/Footer'
import Products from './Pages/Products'
import Warehouse from './Pages/Warehouse'
import Office from './Pages/Office'
import HomePage from './Pages/HomePage'
import Unit from './Pages/Unit'
import PipeCalculator from './Pages/PipeCalculator'
import Converter from './Pages/Converter'
import ScrollTop from './Pages/ScrollTop'


function Appcontent() {
 

  return (
  
    <>
      <Navbar/>
      <ScrollTop/>
      
     
        <Routes>
          <Route path="/" element={<HomePage/>}/>
         

           <Route path="/about" element={<Aboutus/>}/>
           <Route path="/services" element={<Ourservice/>}/>
           <Route path="/inspection" element={<Inspection/>}/>
           <Route path="/testing" element={<Testing/>}/>
           <Route path="/cladding" element={<Cladding/>}/>
           <Route path="/product" element={<Ourproduct/>}/>
           <Route path="/pipefitting" element={<Pipefitting/>}/>
           <Route path="/pipes" element={<Pipes/>}/>
           <Route path="/flanges" element={<Flanges/>}/>
           <Route path="/valves" element={<Valves/>}/>
           <Route path="/strainers" element={<Strainers/>}/>
           <Route path="/plates" element={<Plates/>}/>
           <Route path="/specialitems" element={<Specialitems/>}/>
           <Route path="/gallery" element={<Gallery/>}/>
           <Route path="/products" element={<Products/>}/>
           <Route path="/warehouse" element={<Warehouse/>}/>
           <Route path="/office" element={<Office/>}/>
           <Route path="/certificate" element={<Certification/>}/>
           <Route path="/companyprofile" element={<Company/>}/>
           <Route path="/iso" element={<Iso/>}/>
           <Route path="/faq" element={<Faqs/>}/>
           <Route path="/contact" element={<Contact/>}/>
           {/* <Route path="/calci" element={<Calculator/>}/> */}
           <Route path="/unit" element={<Unit/>}/>  
           <Route path="/pipeprice" element={<PipeCalculator/>}/>   
           <Route path="/unit1" element={<Converter/>}/>   
           


        </Routes>
      
<Footer/>
      
    </>
  )
}

export default function App(){
  return(
    <Router>
      <Appcontent/>
    </Router>
    
  )
}
