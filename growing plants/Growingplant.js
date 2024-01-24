import React,{useState} from 'react'
import './Growingplant.css'

function Growingplant(props) {
  console.log('props', props);
  console.log(props.pdetail);
  console.log(props.psize);
  console.log(props.paboutme);

  const defaultdata = {
    name: 'No Mentioned',
    icon: 'Not Provided',
    size: 'Not Mentioned',
    color: 'Not Provided',
    aboutme: 'Not provided'

  }
  //destructing
  const { plantdetails = defaultdata } = props
  let { name, size, icon, color, aboutme } = plantdetails

 const [dynamicsize,setdynamicsize]= useState(size)  //rerender,ui change

 console.log('dynamicsize',dynamicsize);

  const handleClick= () => {
    setdynamicsize(dynamicsize+10)
    // console.log('before',size);
    // size=size+10
    // console.log('after clicked',size);
  }

  return (
    <div className='plant'>
      <center>
        <div className='text'>Growing plant</div>
        <div className='logo'> This is My Plant 🌴</div>
      </center>
      <hr></hr>
      <div>
        <h1>i am {name} im growing </h1>
        <h3> {plantdetails.color}</h3>
        <span style={{ fontSize: '${dynamicsize}px'}}>
        {icon}
        </span>
      </div>
      <button onClick={handleClick}>Give Water</button>
       <div>{aboutme}</div> 
        {/* condition rendering */}
        {name === 'Rose' ?
          <div>yes this is rose</div> :
          <div>no its not a rose</div>}
    </div>

  )
}

export default Growingplant