import React from 'react'
import './Growingplant.css'

function Growingplant(props) {
  console.log('props', props);
  console.log(props.pdetail);
  console.log(props.psize);

  const defaultdata = {
    name: 'No Mentioned',
    icon: 'Not Provided',
    size: 'Not Mentioned',
    color: 'Not Provided'

  }

  const { plantdetails = defaultdata } = props

  return (
    <div className='plant'>
      <center>
        <div className='text'>Growing plant</div>
        <div className='logo'> This is My Plant 🌴</div>
      </center>
      <hr></hr>
      <div>
        <h1>i am {plantdetails.name}</h1>
        <h3>im growing {plantdetails.size}cm </h3>
        <h1>{plantdetails.icon}</h1>
        <h3> {plantdetails.color}</h3>
      </div>
    </div>

  )
}

export default Growingplant