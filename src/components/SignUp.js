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

const Signup =()=>{
    const [signup, setSignup]=useState(
        {
          name:"",
          username: '',
          password: ''
        }
      )
      const handleSignup = e =>{
        setSignup({
          ...signup,
          [e.target.name] : e.target.value
        })
        // console.log(signup)
      }
      const handleSubmitSignUp=e=>{
        e.preventDefault();
        axios
        .post ('https://wunderlistbuildweek.herokuapp.com/api/auth/register', signup)
        .then(res=>{
          console.log(res)
        })
        .catch(err=>console.log(err))
      }
      return(
          <CardWrapper>
                <CardHeader><CardHeading>Welcome To WunderList Sign Up Here!</CardHeading></CardHeader>
            <CardBody>
            <form onSubmit={handleSubmitSignUp}>
                <CardFieldset>
                      <CardInput type="text" name="name" placeholder="name here"  value={signup.name} onChange={handleSignup}/>
                </CardFieldset>
                  <CardFieldset>
                      <CardInput type="text" name="username" placeholder="username here" value={signup.username} onChange={handleSignup}/>
                  </CardFieldset>
                  <CardFieldset>
                      <CardInput type="text" name="password" placeholder="password here" value={signup.password} onChange={handleSignup}/> 
                  </CardFieldset> 
                  <CardFieldset> 
                      <CardButton>Sign Up!</CardButton>
                  </CardFieldset>
                  <CardFieldset>
                      <Link to ="/login"><CardButton>Log in!</CardButton></Link>
                  </CardFieldset>
              </form>
            </CardBody>
          </CardWrapper>

      )
}

export default Signup