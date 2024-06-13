import React, { useState } from 'react';
import "./reg.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[msg,setMsg]=useState("")
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const payload={username,email,password}

        await axios.post("https://bd-6.onrender.com/api/register",payload)
       .then((res)=>setMsg(res.data.message))
       .catch((error)=>{
        console.log(error)
        setMsg("Registrations failed")
       })
       navigate("/login");}
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5 d-flex align-items-stretch">
                    <div className="card flex-fill">
                        <div className="card-body text-center d-flex flex-column justify-content-center">
                            <h2 className='mb-4'>Welcome Back!</h2>
                            <p >Good to see you again! Log in to access your account.**This is a demo project**</p>
                            <button className="btn btn-success  mt-3" onClick={() => navigate('/login')}>SIGN IN</button>
                            <Link to ="/" className='text-black m-4'>Back to Homepage</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch ">
                    <div className="card flex-fill p-4">
                        <div className="card-body d-flex flex-column justify-content-center p-3 mb-4">
                            <h2 className="card-title text-center mb-4 mt-5">Create Account</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor='username'><h6>Name:</h6></label>
                                    <input type="text" name="username" value={username} className="form-control" placeholder="Enter your Name" onChange={(e)=>setUsername(e.target.value)} required/><br></br>
                                </div>
                                <div className="form-group">
                                    <label htmlFor='email'><h6>Email:</h6></label>
                                    <input type="email" name="email" value={email} className="form-control" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} required/><br></br>
                                </div>
                                <div className="form-group">
                                    <label htmlFor='password'><h6>Password:</h6></label>
                                    <input type="password" name="password" value={password} className="form-control" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} required/><br />
                                </div>
                                <div className='text-center'>
                                    <button className="btn btn-success btn-block" type='submit'>SIGN UP</button>
                                </div>
                                
                            </form>
                            <h1>{msg}</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;