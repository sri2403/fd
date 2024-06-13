import React, { useState } from 'react';
import "./login.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({setToken}) => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[msg,setMsg]=useState("")
    const navigate =useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();

        const payload={email,password}

        await axios.post("https://bd-6.onrender.com/api/login",payload)
       .then((res)=>{
        setMsg(res.data.message)
        setToken(res.data.token)
        navigate("/profile")})
       .catch((err)=>{
        console.log(err)
        setMsg("Invalid credentials..!")
       })
       setEmail("")
       setPassword("")
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5 d-flex align-items-stretch">
                    <div className="card flex-fill">
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h2 className="card-title text-center mb-4">Sign in</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor='email'><h6>Email:</h6></label>
                                    <input type="email" name="email" required value={email} className="form-control" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
                                </div>
                                <div className="form-group">
                                    <label htmlFor='password'><h6>Password:</h6></label>
                                    <input type="password" required name="password" value={password} className="form-control" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}/><br />
                                </div>
                                <div className="form-group text-center">
                                    <Link to="/forgot-password">Forgot your password?</Link>
                                </div>
                                <div className='text-center'>
                                <button className="btn btn-success btn-block mt-3">SIGN IN</button>
                                </div>
                            </form>
                            <h6 className='text-center mt-2'>{msg}</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                    <div className="card flex-fill">
                        <div className="card-body text-center d-flex flex-column justify-content-center">
                            <h2 className='mb-4'>Hello, Friend!</h2>
                            <p>Enter your personal details and start your journey with us.**This is a demo project**</p>
                            <button className="btn btn-success  mt-3"  onClick={()=>navigate("/register")}>Create new account</button>
                            <Link to ="/" className='text-black m-4'>Back to Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;