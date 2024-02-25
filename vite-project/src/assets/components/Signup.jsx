import React from 'react';
import "../components/Home.css"
import "../components/Signup.css"
import logo from "../logo.jpg"
const Home = () => {
  return (
    
          <div>
            <img src={logo} alt="Logo" className="logo" />
            <div className='login'>
              <h1 className='heading'>SignUp</h1>
              <h2>We are glad you’re here, Sign up to get started.</h2>
              <div className="divider1">
                <input type="text" placeholder="Name" className="inputField" />
              </div>
              <div className="divider2">
                <input type="email" placeholder="Email" className="inputField" />
              </div>
              <div className="divider3">
                <input type="password" placeholder="Password" className="inputField" />
              </div>
              
              <div className="divider4">
                <button className="submitButton">Submit</button>
              </div>
            </div>
          </div>
        );
      }
      
      










   
  

export default Home