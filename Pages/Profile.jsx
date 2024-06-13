import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./profile.css";
import { Link } from 'react-router-dom';

const Profile = ({token}) => {
    const [url, setUrl] = useState('');
    const [urlData, setUrlData] = useState([]);
    const[mssg,setMssg]=useState("")
    

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const payload={url,headers:{
            Authorization:{token}
        }}
        await axios.post('https://bd-6.onrender.com/api/shortUrls', payload)
        .then((res)=>{
            const newData={
                url: res.data.result.url,
                short: `https://${res.data.result.short}`
            }
            setUrlData([...urlData, newData])
            setMssg(res.data.message)
            setTimeout(() => {
                setMssg(" ")
            }, 2000);
            setUrl('');
        })
        .catch((err)=>{
            console.log(err)
            setTimeout(() => {
                setMssg("Invalid credentials..!")
            }, 5000);
            setUrl("")
        })
    }
   
    return (
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
    );
};

export default Profile;