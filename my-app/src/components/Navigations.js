import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    console.log('navigation running')
    return (
        <div>
            <Link exact to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    )
}
export default Navigation;