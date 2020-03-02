import React, {useState} from 'react';

const Login = () => {

    const [login, setLogin] = useState({username:'', password:''});

    const handleChanges = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    };

    const submitForm = (e) => {
        e.preventDefault();
        setLogin({username:'', password:''});
        console.log('Username:', login.username, 'Password:', login.password)
    };

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={submitForm}>
                <label htmlFor='username'>Username: </label>
                <input 
                    id='username'
                    type='username'
                    name='username'
                    required='true'
                    onChange={handleChanges}
                    value={login.username}
                />
                <br/>
                <label htmlFor='password'>Password: </label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    required='true'
                    onChange={handleChanges}
                    value={login.password}
                />
                <br/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;