import axios from 'axios';
import React, { useState } from 'react';
import "./profile.css";
import { Link } from 'react-router-dom';

const Profile = ({ token }) => {
    // State variables
    const [url, setUrl] = useState('');
    const [urlData, setUrlData] = useState([]);
    const [mssg, setMssg] = useState("");

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { url };

        try {
            const response = await axios.post('https://bd-6.onrender.com/api/shortUrls', payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const newData = {
                url: response.data.result.url,
                short: `https://${response.data.result.short}`
            };

            // Update state with new data
            setUrlData([...urlData, newData]);
            setMssg(response.data.message);
            setUrl('');

            // Clear message after 2 seconds
            setTimeout(() => {
                setMssg("");
            }, 2000);

        } catch (error) {
            console.error('Error:', error);
            setMssg("Invalid credentials..!");
            setUrl('');

            // Clear message after 5 seconds
            setTimeout(() => {
                setMssg("");
            }, 5000);
        }
    };

    return (
        <div>
            {token ? (
                <div className='profile-container'>
                    <div className='url-shortener-container'>
                        <h1 className='url-heading'>URL Shortener</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='url-input-container'>
                                <label className='url-label'>URL: </label>
                                <input type="text" className='url-input' value={url} onChange={(e) => setUrl(e.target.value)} />
                                <button className='url-button' type="submit">Click here</button>
                            </div>
                            <p>{mssg}</p>
                        </form>
                        <table className='url-table'>
                            <thead>
                                <tr>
                                    <th>Full URL</th>
                                    <th>Short URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {urlData.map((data, index) => (
                                    <tr key={index}>
                                        <td>
                                            <a href={data.url} target="_blank" rel="noopener noreferrer">
                                                {data.url}
                                            </a>
                                        </td>
                                        <td>
                                            <a href={data.url} target="_blank" rel="noopener noreferrer">
                                                {data.short}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='text-center mt-5'>
                        <Link to="/" className='text-black'><h5>Back to homepage</h5></Link>
                    </div>
                </div>
            ) : (
                <p className='text-white p-5 m-5'>please login to access url shortener</p>
            )}
        </div>
    );
};

export default Profile;
