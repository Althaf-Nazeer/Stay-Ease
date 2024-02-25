import React, { useState } from 'react';
import supabase from '../../config/supabaseClient';
import "../components/Update.css"
import logo from "../logo.jpg"

const Update = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [service, setService] = useState('');
    const [formError, setFormError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !location || !service ) {
            setFormError('Fill out all fields properly');
            return;
        }

        try {
            const { data, error } = await supabase
                .from('smoothies')
                .insert([{ title, location, service }]);

            if (error) {
                throw error;
            }

            console.log('Insertion Successful. Data:', data);
            setFormError(null);
        } catch (error) {
            console.error('Insertion Error:', error);
            setFormError('An error occurred while submitting the form');
        }
    };

    return (
        <div>
            <div className='header'>
                <div><img src={logo} alt="logo" className='logo'/></div>
                <div className='heading'><h1>ADD SERVICES</h1></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='update_div'>
                    <label>Title</label>
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label>Location</label>
                    <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />

                    <label>Service</label>
                    <input type="text" placeholder="Service" value={service} onChange={(e) => setService(e.target.value)} />

                    <button type="submit">SUBMIT</button>
                    {formError && <p className='error'>{formError}</p>}
                </div>
            </form>
        </div>
    );
};

export default Update;
