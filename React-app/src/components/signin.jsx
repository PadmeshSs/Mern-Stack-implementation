import { forwardRef, useContext, useState } from 'react';
import './signin.css';
import { Usercontext } from './appnav';
import { serverpost } from './serverpost';
import { serverlogin } from './serverlogin';

const Signin = forwardRef((props , ref)=>{

    const {setval : setval, setname : setname, setlog : setlog} = useContext(Usercontext);

    const [formdata, setdata] = useState({
        email_login: '',
        pass_login: '',
        email_signup: '',
        pass_signup:'',
        name_signup: ''  
    });

    const loginonly = {
        email: formdata.email_login,
        password: formdata.pass_login
    }

    const signuponly ={
        name: formdata.name_signup,
        email: formdata.email_signup,
        password: formdata.pass_signup
    }

    const handlechange = (e)=>{
        const {name, value} = e.target;
        setdata({
            ...formdata, [name]: value
        });  
    }

    const handlelogin = (e) =>{
        serverlogin(e, loginonly, setlog, setname, setval)
    }

    const handleregister = (e)=>{
        e.preventDefault();
        serverpost(e, formdata, signuponly)
    }

    return (
        <div className="signin-container d-flex justify-content-center align-items-center">
            <div className="wrapper d-flex justify-content-between" ref={ref}>
                <div className="cover position-absolute d-flex justify-content-center align-items-center p-3">
                    <div className="responsetext text-white fs-1 fw-bold text-center">
                      Just brewed happiness in a cup!
                    </div>
                    <img src="/coffee.jpg" className='img-fluid object-fit-cover w-100 h-100 opacity-50 position-absolute z-n1' alt="Guy brewing coffee" />
                </div>
                <div className="logincont position-absolute">
                    <div className="login d-flex flex-column gap-5 ">
                        <div className="title position-relative">
                            Login
                        </div>
                        <form action="" onSubmit={handlelogin}>
                            <div className="errortxt-1 text-center">

                            </div>
                            <div className="boxes d-flex flex-column">
                                <div className="box d-flex align-items-center gap-3 position-relative">
                                    <i className="bi bi-envelope-fill"></i>
                                    <input type="email" name="email_login" id="email" value={formdata.email_login} onChange={handlechange} placeholder='Enter your email'/>
                                </div>
                                <div className="box d-flex align-items-center gap-3 position-relative">
                                    <i className="bi bi-lock-fill"></i>
                                    <input type="password" name='pass_login' id='pass' value={formdata.pass_login} onChange={handlechange} placeholder='Enter your password' />
                                </div>
                                <button type='submit' value='submit' className="btn btn-primary">Submit</button>
                                <div className="ask mt-3 text-center">
                                    Don't have an account? <span className="text-primary" onClick={()=>{
                                        const cover = document.querySelector('.cover');
                                        cover.classList.add('left');
                                        const email = document.getElementById('email');
                                        const password = document.getElementById('pass');
                                        email.value = '';
                                        password.value = '';
                                    }}>Sign Up</span> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="signupcont position-absolute">
                    <div className="signup  d-sm-none d-md-flex flex-column gap-3">
                        <div className="title position-relative">
                            Signup
                        </div>
                        <div className="errortxt-2 text-center">
                        </div>
                        <form action="" onSubmit={handleregister}>
                            <div className="boxes d-flex flex-column">
                                <div className="box d-flex align-items-center gap-3 position-relative">
                                    <i className="bi bi-person-fill"></i>
                                    <input type="text" name="name_signup" id="name-signup"  placeholder='Enter your name' value={formdata.name_signup} onChange={handlechange}/>
                                </div>
                                <div className="box d-flex align-items-center gap-3 position-relative">
                                    <i className="bi bi-envelope-fill"></i>
                                    <input type="email" name="email_signup" id="email-signup"  value={formdata.email_signup} onChange={handlechange} placeholder='Enter your email'/>
                                </div>
                                <div className="box d-flex align-items-center gap-3 position-relative">
                                    <i className="bi bi-lock-fill"></i>
                                    <input type="password" name='pass_signup' id='pass-signup-1' value={formdata.pass_signup} onChange={handlechange} placeholder='Enter your password' />
                                </div>
                                <button className="btn btn-primary" type='submit' value='submit'>Submit</button>
                                <div className="ask mt-3 text-center">
                                    Already have an account? <span className="text-primary" onClick={()=>{
                                        const cover = document.querySelector('.cover');
                                        cover.classList.remove('left');
                                    }}>Login</span> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
});

export default Signin;