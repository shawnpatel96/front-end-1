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
        props.history.push('/form');                           
      })
      .catch(error =>{
        console.log("this is error from login post", error)
      })
  };
  return (
      <div>
                                                               
          <form onSubmit={handleSubmit}>

            <input type="text" name="username" placeholder="username here" value={login.username} onChange={handleLogin}/>
            <input type="password" name="password" placeholder="username here" value={login.password} onChange={handleLogin}/>          
            <button> Login </button>

          </form>
      </div>
  )

}

export default Login
