import React from 'react'

export default function Mainpage({setMale,setShow2,setFemale}) {
    const handleMale = ()=>{
        setMale(true)
        setShow2(false)
    }
    
    const handleFemale = ()=>{
        setFemale(true)
        setShow2(false)
    }



  return (
    <div className='gender_selection_page'>
        <h1 className='category'>Select Category</h1>
        <button className='gender_selection' onClick={handleMale}>Male</button>
        <button className='gender_selection' onClick={handleFemale}>Female</button>
    </div>
  )
}
