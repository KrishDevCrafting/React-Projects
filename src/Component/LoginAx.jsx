import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
// import './Dash.css'

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:7000/Empolyees');
            const data = await response.json();
            const user = data.find((u) => u.email === email && u.password === password);
  setTimeout(()=>{
    window.location.reload()
  },2000)
  
            if (user) {
                console.log('Logged in successfully:', user);
                toast.success(`Welcome, ${user.email}!`);
                
                setTimeout(()=>{
                    navigate('/Dash');
                },1000)
              
            } else {
                console.log('Incorrect email or password');
                toast.error('Incorrect email or password');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error occurred');
            
        }
    };

    return (
        <>
            <div className="main container-fluid">
                <form className="" onSubmit={(e) => e.preventDefault()}>
                    <h4 className="p-3 text-primary text-center fs-3">Login Form</h4>
                    <div className="Fx">
                        <label className="fs-5">Email</label>
                        <input
                            onChange={handleInput}
                            value={email}
                            className="form-control fs-5"
                            type="text"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                    <div className="Fx my-3">
                        <label className="fs-5">Password</label>
                        <input
                            required
                            value={password}
                            onChange={handlePassword}
                            className="form-control fs-5"
                            type="password"
                            placeholder="Enter Your password"
                        />
                    </div>
                    <div>
                        <button className="btn btn-outline-light my-3" onClick={handleLogin} type="button">
                            Login
                        </button>
                        <Toaster />
                    </div>
                    <div className="d-flex p-3">
                        <p className="text-light">Don't have an account?</p>
                        <Link to="/sign">
                            <a href="#" className="mx-2 text-decoration-none">
                                SignUp
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
