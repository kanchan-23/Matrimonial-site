import './App.css';
import React,{useState} from 'react'
import BoysList from './BoysList';
import GirlsList from './GirlsList';

import Loginpage from './Loginpage';
import SignupPage from './SignupPage';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './Mainpage';

const App = ()=> {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(true)
    const [home, sethome] = useState(true)
    const [about, setAbout] = useState(true)
    const [male, setMale] = useState(false)
    const [female, setFemale] = useState(false)
    return (
      <div>
      <BrowserRouter>
      {!(male || female) && <Navbar/>}
      <Routes>
      <Route exact path='/' element={home && <Home/>}>
      </Route>
      <Route exact path='/about' element={about && <About/>}>
      </Route>
      <Route exact path='/Loginpage' element={!show && show1 && <Loginpage setShow={setShow} setShow1 = {setShow1} sethome = {sethome} setAbout = {setAbout}></Loginpage>}>
      </Route>
      </Routes>
        {show && <SignupPage setShow={setShow}></SignupPage>}
        {!show1 &&  show2 && <Mainpage setMale = {setMale} setShow2 = {setShow2} setFemale = {setFemale}></Mainpage>}
        {male && <BoysList></BoysList>}
        {female && <GirlsList></GirlsList>}
      </BrowserRouter>
      </div>
    )

  }
export default App;



