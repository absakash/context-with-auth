import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../context/Contexts';

const Header = () => {
    const {user,logout}=useContext(Authcontext)
    const handleout=()=>{
        logout()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='bg-neutral'> 
                    <div className="navbar bg-primary text-primary-content">
                        <Link to='/lessika'>
                    <a className="btn btn-ghost normal-case text-3xl">Lessika</a>

                        </Link>

                    <NavLink className="btn btn-ghost normal-case " to='/home' >Home</NavLink>
                    <NavLink className="btn btn-ghost normal-case text" to='/about'>About</NavLink>
                    {/* <NavLink className="btn btn-ghost normal-case text" to='/login'>Login</NavLink> */}
                    {user?.email && <span>welcome {user.email}</span>}
                    
                    {user?.email ?
                        <button onClick={logout} className="btn btn-ghost normal-case">log out</button>
                        :<Link to='/login'>
                        <button className='btn btn-sm'>login</button></Link>
         }
                    </div>
           
        </div>
    );
};

export default Header;