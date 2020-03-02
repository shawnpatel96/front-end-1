import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

//styled components
const LoginStyle = styled.section`
    margin: 1%;
    padding: 2%;
    border: 1px dashed white;
`
const Form = styled.p`
    border: 1px dashed white;
    padding: 3%;
    margin: 3%;
    background: #36454F;
    color: #e3dac9;
`
const Field = styled.span`
    margin: 1%;
`
const Button = styled.span`
    border: 1px solid white;
    margin: 3%;
    padding: 0.5%;
    border-radius: 15%; 
    background: #36454F;
    color: #e3dac9;   
`

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
        <LoginStyle>
            <h1>Login</h1>
            
            <form onSubmit={submitForm}>
                <Form>
                    <Field>
                        <label htmlFor='username'>Username: </label>
                        <input 
                            id='username'
                            type='username'
                            name='username'
                            onChange={handleChanges}
                            value={login.username}
                        />
                    </Field>
                    
                    <Field>
                        <label htmlFor='password'>Password: </label>
                        <input
                            id='password'
                            type='password'
                            name='password'
                            onChange={handleChanges}
                            value={login.password}
                        />
                    </Field>
                    
                    </Form>
                <br/>
                <Button>
                    <Link to='/todo' style={{ textDecoration: 'none', color: '#e3dac9' }}>Login</Link>
                </Button>  
            </form>
        </LoginStyle>
    )
}

export default Login;