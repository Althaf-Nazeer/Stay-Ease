import React from 'react'
import food from "../food.jpeg";
import used from "../used.jpeg";
import laundry from "../components/laundry.jpg"
import "../components/Landing.css"
import logo from "../logo.jpg"
import { Link } from 'react-router-dom';
import "../components/Laundrser.css"
const Landing = () => {
  return (
    <div className='landingk'>
    <div className='logoi'>
      <img src={logo} width={200} height={200}/>
    </div>
    <Link to="/update"> 
        <button className='provide'>Provide</button>
      </Link>


    <div className='landing'>
        <div>

        <h1>HOME</h1>
        
        </div>
        
        <p>SERVICES</p>
<div className='foodimage'>
    <div  className='food'>
    <img src={ food}  ></img>
    <p><Link to="/food">Food</Link></p>
    </div>
    <div  className='food'>
    <img src={ laundry}  ></img>
    <p><Link to="/Laundry">Laundry</Link></p>
    </div>
    <div  className='food'>
    <img src={ used}  ></img>
    <p>Used Goods</p>
    </div>
   


   
</div>


    </div>
    </div>
  )

}

export default Landing