import React, {useState} from "react";
import axios from "axios"


const Login =(props) =>{
const [login, setLogin] = useState(
        {
          username: '',
          password: ''
        }
);
      
const handleChanges = e => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    });
    console.log(login);
};

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

      <input type="text" name="username" placeholder="username here" value={login.username} onChange={handleChanges}/>
           
      <button> Login </button>

      </form>         
      
      </>
  )

}

export default Login
