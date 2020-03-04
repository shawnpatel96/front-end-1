import React, {useState} from "react";
import axios from "axios"

/// THIS IS THE LOG IN AND SIGN UP CODE


const Login =(props) =>{
const [login, setLogin] = useState(
        {
          username: '',
          password: ''
        }
);
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
      
const handleLogin = e => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    });
    // console.log(login);
};
const handleSubmitSignUp=e=>{
  e.preventDefault();
  axios
  .post ('https://wunderlistbuildweek.herokuapp.com/api/auth/register', signup)
  .then(res=>{
    console.log(res)
  })
  .catch(err=>console.log(err))
}
const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://wunderlistbuildweek.herokuapp.com/api/auth/login	', login)   ////////////////////////////////////////// Change

      .then(res => {
        console.log('this is response from login post',res);
        localStorage.setItem('token', res.data.token);
        props.history.push('/form');                           ///////////////////////////////// ADD home page endpoint route
      })
      .catch(error =>{
        console.log("this is error from login post", error)
      })
  };
  return (
      <>
      <h1>Welcome to WunderList</h1>                                        {/* ////////////////////// RAE's  LOGIN PAGE HERE////////////////////  */}                     
      <form onSubmit={handleSubmit}>

      <input type="text" name="username" placeholder="username here" value={login.username} onChange={handleLogin}/>
      <input type="password" name="password" placeholder="username here" value={login.password} onChange={handleLogin}/>          
      <button> Login </button>

      </form> 
      <form onSubmit={handleSubmitSignUp}>
      <input type="text" name="name" placeholder="name here"  value={signup.name} onChange={handleSignup}/>
      <input type="text" name="username" placeholder="username here" value={signup.username} onChange={handleSignup}/>
      <input type="text" name="password" placeholder="password here" value={signup.password} onChange={handleSignup}/>  
      <button>sign up</button>
      </form>

              
      
      </>
  )

}

export default Login
