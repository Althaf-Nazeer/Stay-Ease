import supabase from "../../config/supabaseClient";
import { useEffect, useState } from 'react';
import logo from  "../logo.jpg";
import React from 'react';
import "../components/Foodservices.css";
import  home from "../home.jpg"
const Foodservices = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      try {
        const { data, error } = await supabase
          .from('smoothies')
          .select();

        if (error) {
          setFetchError("Could not fetch smoothies");
          setSmoothies(null);
          console.error(error);
        } else {
          setSmoothies(data);
          setFetchError(null);
        }
      } catch (error) {
        setFetchError("An error occurred while fetching smoothies");
        setSmoothies(null);
        console.error(error);
      }
    };

    fetchSmoothies();
  }, []);

  console.log('Smoothies:', smoothies);
  console.log('Fetch Error:', fetchError);

  return (
    <div className="food_page">
      <div className="header">
        <img src={logo} alt="logo"  className="logop" />
        <h1>FOOD</h1>
      </div>
      
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          {smoothies.map(smoothie => (
            <div key={smoothie.id} className="product">
              <img src={home} alt={smoothie.title} />
              <h2>{smoothie.title}</h2>
              <p>{smoothie.location}</p>
              <p>Price:{smoothie.price}</p>
              <div className="rating">
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Foodservices;
