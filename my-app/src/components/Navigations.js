import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    // console.log('navigation running')
    return (
        <div>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
            <Link to='/register' style={{ textDecoration: 'none', color: 'white' }}>Register</Link>
        </div>
    )
}
export default Navigation;