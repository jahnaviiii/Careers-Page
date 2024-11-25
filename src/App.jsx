import { useState } from 'react'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route, 
  RouterProvider
 } from 'react-router-dom';

 //pages
import Home from './components/Home';
import About from './components/About';
import Faq from './components/help/faq';
import Contact, { contactAction } from './components/help/contact';
import NotFound from './components/NotFound';


//layout
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareerLayout from './layouts/CareerLayout';
import { careerLoader } from './layouts/CareerLayout';
import Careers from './components/Careers';
import CareerDetails from './components/CareerDetails';
import { careerDetailsLoader } from './components/CareerDetails'
import CareersError from './components/CareersError';
import Acknowledgement from './components/help/Acknowledgement';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/about' element ={<About/>}></Route>
      <Route path="help" element = {<HelpLayout/>}>
        <Route path="faq" element = {<Faq/>}/>
        <Route path="contact" element = {<Contact/>} action={contactAction} />
      </Route>
      <Route path='acknowledgement' element={<Acknowledgement/>} />
      <Route  path='/careers' element ={<CareerLayout/>} errorElement ={<CareersError/>}>
        <Route 
          index
          element={<Careers/>}
          loader={careerLoader}
        />
        <Route
          path=':id'
          element={<CareerDetails />}
          loader = {careerDetailsLoader}
          
        />
      </Route>


      {/* if none of the routes match */}
      <Route path='*' element = {<NotFound/>} />
    </Route>
  )
)
function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
