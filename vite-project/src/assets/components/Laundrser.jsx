import supabase from "../../config/supabaseClient";
import { useEffect, useState } from 'react';
import logo from  "../logo.jpg";
import React from 'react';
import "../components/Foodservices.css";
import  home from "../home.jpg"
import  download from "../download.jpg"

const Foodservices = () => {
  const [fetchError, setFetchError] = useState(null);
  const [laundryItems, setLaundryItems] = useState(null); 

  useEffect(() => {
    const fetchLaundryItems = async () => { 
      try {
        const { data, error } = await supabase
          .from('laundry') 
          .select();

        if (error) {
          setFetchError("Could not fetch laundry items");
          setLaundryItems(null);
          console.error(error);
        } else {
          setLaundryItems(data);
          setFetchError(null);
        }
      } catch (error) {
        setFetchError("An error occurred while fetching laundry items");
        setLaundryItems(null);
        console.error(error);
      }
    };

    fetchLaundryItems();
  }, []);

  console.log('Laundry Items:', laundryItems);
  console.log('Fetch Error:', fetchError);

  return (
    <div className="food_page">
      <div className="header">
        <img src={logo} alt="logo"  className="logop" />
        <h1>LAUNDRY</h1>
      </div>
      
      {fetchError && <p>{fetchError}</p>}
      {laundryItems && (
        <div className="smoothies">
          {laundryItems.map(item => (
            <div key={item.id} className="product">
              <img src={download} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.location}</p>
              <p>Price:{item.price}</p>
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
