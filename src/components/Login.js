import React, { useContext, useState } from 'react';
import { Authcontext } from '../context/Contexts';

const Login = () => {
    
    const {googlelogin,emailpass}=useContext(Authcontext);
    const handlesubmit=event=>{
        event.preventDefault();
        const form=event.target;
        // console.log(form);
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email);
        console.log(password);

        emailpass(email,password)
        .then(result=>{
            const user=result.user;
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handlegoogle=()=>{
        googlelogin()
        .then(result=>{
            const user=result.user;
        })
        .catch(error=>{
            console.log("error : ",error);
        })
    }
    return (
        <div>
           
                   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      {/* <p className="py-6">Please login here .......................</p> */}
    </div>
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handlesubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

      <button onClick={handlegoogle} className="btn btn-primary">google</button>

      </form>

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;