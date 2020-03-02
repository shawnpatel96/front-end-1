import React, {useState} from 'react';
import {Link} from 'react-router-dom';


export const Register = () => {

    const [register, setRegister] = useState({name:'', username:'', password:''});

    const handleChanges = (e) => {
        setRegister({...register, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegister({name:'',username:'', password:''});
        console.log('Name:', register.name,'Username:', register.username, 'Password:', register.password)
    };

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={event => handleSubmit(event)}>
            <label htmlFor='name'>Name: </label>
                <input 
                    id='name'
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    value={register.name}
                />
                <br/>
                <label htmlFor='username'>Username: </label>
                <input 
                    id='username'
                    type='username'
                    name='username'
                    onChange={handleChanges}
                    value={register.username}
                />
                <br/>
                <label htmlFor='password'>Password: </label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    onChange={handleChanges}
                    value={register.password}
                />
                <br/>
                <Link to='/todo' style={{ textDecoration: 'none', color: 'white' }}><button type='submit'>Register</button></Link>
            </form>
        </div>
    )
}

export default Register;