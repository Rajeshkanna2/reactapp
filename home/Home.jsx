import React from 'react'
import Growingplant from '../growing plants/Growingplant'

function Home() {
    const plantdetails = {
        name: 'Rose',
        icon: '🌹',
        size: 30,
        color: 'pinkred',
    }

    const plantdetails2 = {
        name: 'sunflower',
        icon: '🌼',
        size: 40,
        color: 'white',
    }
    const plantdetails3 = {
        name: 'Grass',
        icon: '🌱',
        size: 10,
        color: 'Green',
    }
    return (
        <div>
            <center> <h1>Welcome to Home</h1> </center>
            <hr></hr>
            <Growingplant plantdetails={plantdetails2} />
            <hr></hr>
            <Growingplant plantdetails={plantdetails} />
            <hr></hr>
            <Growingplant />
            <hr></hr>
            <Growingplant plantdetails={plantdetails3} />

        </div>
    )
}

export default Home
