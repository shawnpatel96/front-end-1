import React, {useState} from "react";
import axios from "axios"
import {Link} from 'react-router-dom';
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
          <>
          <header><header>Welcome To WunderList Sign Up Here!</header> </header>
            <form onSubmit={handleSubmitSignUp}>
                    <input type="text" name="name" placeholder="name here"  value={signup.name} onChange={handleSignup}/>
                    <input type="text" name="username" placeholder="username here" value={signup.username} onChange={handleSignup}/>
                    <input type="text" name="password" placeholder="password here" value={signup.password} onChange={handleSignup}/>  
                    <button>Sign Up!</button>
                    <Link to ="/login"><button>Log in!</button></Link>
                
                    
            </form>


          </>

      )
}

export default Signup