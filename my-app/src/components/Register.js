import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

//styled components
const RegStyle = styled.section`
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
    display: flex;
    justify-content: space-evenly;
`
const Button = styled.span`
    border: 1px solid white;
    margin: 3%;
    padding: 1%;
    border-radius: 15%; 
    background: #36454F;
    color: #e3dac9;   
`

export const Register = () => {

    const [register, setRegister] = useState({name:'', username:'', password:''});

    const handleChanges = (e) => {
        setRegister({...register, [e.target.name]: e.target.value})
    };

    const submitForm = (e) => {
        e.preventDefault();
        setRegister({name:'',username:'', password:''});
        console.log('Name:', register.name,'Username:', register.username, 'Password:', register.password)
    };

    return(
        <RegStyle>
            <h1>Register</h1>
            <Form>
                <form onSubmit={submitForm}>
                    <Field>
                        <label htmlFor='name'>Name: </label>
                        <input 
                            id='name'
                            type='text'
                            name='name'
                            onChange={handleChanges}
                            value={register.name}
                        />
                    </Field>
                
                    {/* <br/> */}

                    <Field>
                        <label htmlFor='username'>Username: </label>
                        <input 
                            id='username'
                            type='username'
                            name='username'
                            onChange={handleChanges}
                            value={register.username}
                        />
                    </Field>
                    
                    {/* <br/> */}

                    <Field>
                        <label htmlFor='password'>Password: </label>
                        <input
                            id='password'
                            type='password'
                            name='password'
                            onChange={handleChanges}
                            value={register.password}
                        />
                    </Field>

                    {/* <br/> */} 
                </form>
            </Form>  
            <Button>
                <Link to='/todo' style={{ textDecoration: 'none', color: '#e3dac9' }}>Register</Link>
            </Button>
        </RegStyle>
    )
}

export default Register;