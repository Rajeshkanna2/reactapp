import React from 'react'
import Growingplant from '../growing plants/Growingplant'

function Home() {
    const plantdetails = {
        name: 'Rose',
        icon: '🌹',
        size: 30,
        color: 'pinkred',
        aboutme: [
            "sysmbol of love",
            "with different colors",
        ],
    }

    const plantdetails2 = {
        name: 'sunflower',
        icon: '🌼',
        size: 40,
        color: 'white',
        adoutme:[
            "used for oil",
            "good for health",
        ],
    }
    const plantdetails3 = {
        name: 'Grass',
        icon: '🌱',
        size: 10,
        color: 'Green',
        aboutme:[
            "different in types",
            "food for cow and goat",
        ],
    }
    return (
        <div>
            <center> <h1>Welcome to Home</h1> </center>
            <hr></hr>
            <Growingplant plantdetails={plantdetails} />
            <hr></hr>
            <Growingplant plantdetails={plantdetails2} />
            <hr></hr>
            <Growingplant />
            <hr></hr>
            <Growingplant plantdetails={plantdetails3} />

        </div>
    )
}

export default Home
