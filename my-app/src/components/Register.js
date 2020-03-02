import React, {useState} from 'react';

export const Register = () => {

    const [register, setRegister] = useState({name:'', email:'', username:'', password:''});

    const handleChanges = (e) => {
        setRegister({...register, [e.target.name]: e.target.value})
    };

    const submitForm = (e) => {
        e.preventDefault();
        setRegister({name:'', email:'', username:'', password:''});
        console.log('Name:', register.name, 'Email:', register.email, 'Username:', register.username, 'Password:', register.password)
    };

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
                <input 
                    id='name'
                    type='text'
                    name='name'
                    required='true'
                    onChange={handleChanges}
                    value={register.name}
                />
                <br/>
                <label htmlFor='email'>Email: </label>
                <input 
                    id='email'
                    type='email'
                    name='email'
                    required='true'
                    onChange={handleChanges}
                    value={register.email}
                />
                <br/>
                <label htmlFor='username'>Username: </label>
                <input 
                    id='username'
                    type='username'
                    name='username'
                    required='true'
                    onChange={handleChanges}
                    value={register.username}
                />
                <br/>
                <label htmlFor='password'>Password: </label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    required='true'
                    onChange={handleChanges}
                    value={register.password}
                />
                <br/>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register;