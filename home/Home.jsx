import React from 'react'
import Growingplant from '../growing plants/Growingplant'

function Home() {
    const plantdetails ={
        name: 'Rose',
        icon: '🌹',
        size: 30,
        color: 'pinkred',
       }

       const plantdetails2 ={
        name: 'sunflower',
        icon: '🌼',
        size: 40,
        color: 'white',
       }
    return (
        <div>
           <center> <h1>Welcome to Home</h1> </center>
           <hr></hr>
    <Growingplant plantdetails={plantdetails2}/> 
    <hr></hr>
    <Growingplant plantdetails= {plantdetails} />
    <Growingplant/>
    
        </div>
    )
}

export default Home