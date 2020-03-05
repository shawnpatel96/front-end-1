import React, {useState} from "react";
import axios from "axios"
import {Link} from 'react-router-dom';

import ReactDOM from "react-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink
} from "./styles";



const Login =(props) =>{
  
const [login, setLogin] = useState(
        {
          username: '',
          password: ''
        }
);

const handleLogin = e => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    });
    // console.log(login);
};

const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://wunderlistbuildweek.herokuapp.com/api/auth/login	', login)  

      .then(res => {
        console.log('this is response from login post',res);
        localStorage.setItem('token', res.data.token);
        props.history.push('/homepage');                           
      })
      .catch(error =>{
        console.log("this is error from login post", error)
      })
  };
  return (
      <CardWrapper>
                <CardHeader><CardHeading>Welcome To WunderList Log in Here!</CardHeading></CardHeader> 
           <CardBody>                                     
          <form onSubmit={handleSubmit}>
            <CardFieldset>
            <CardInput type="text" name="username" placeholder="username here" value={login.username} onChange={handleLogin}/>
            </CardFieldset>
            <CardFieldset>
            <CardInput type="password" name="password" placeholder="username here" value={login.password} onChange={handleLogin}/>  
            </CardFieldset> 
            <CardFieldset>
            <CardOptionsNote>Or sign up with</CardOptionsNote>

            <CardOptions>
              <CardOptionsItem>
                <CardIcon className="fab fa-google">Google</CardIcon>
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-twitter">Twitter</CardIcon>
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-facebook">FaceBook</CardIcon>
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset>
            <CardFieldset>      
            <CardButton> Login </CardButton>
            </CardFieldset> 
            <CardFieldset> 
            <Link to ='/signup'><CardLink>Sign Up Instead</CardLink></Link>
            </CardFieldset> 
          </form>
          </CardBody> 
             
      </CardWrapper>
  )

}

export default Login
