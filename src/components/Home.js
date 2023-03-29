import React, { useContext } from 'react';
import { Authcontext } from '../context/Contexts';

const Home = () => {
    const {user}=useContext(Authcontext)
    console.log(user)
    return (
        <div>
            i am from home = 
        </div>
    );
};

export default Home;