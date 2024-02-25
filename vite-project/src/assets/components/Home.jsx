import React from 'react';
import "../components/Home.css"
import logo from "../logo.jpg"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    
          <div>
            <img src={logo} alt="Logo" className="logo" />
            <div className='login'>
              <h1 className='heading'>Login</h1>
              <h2>We are glad you’re here, Login to get started.</h2>
              <div className="divider1">
                <input type="text" placeholder="Name" className="inputField" />
              </div>
              <div className="divider2">
                <input type="email" placeholder="Email" className="inputField" />
              </div>
              <div className="divider3">
                <input type="password" placeholder="Password" className="inputField" />
              </div>
              <p>Not a member ?<Link to="/Signup">SignUp</Link> </p>
              <div className="divider4">
                <button className="submitButton">Submit</button>
              </div>
            </div>
          </div>
        );
      }
      
      










   
  

export default Home