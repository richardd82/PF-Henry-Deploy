import React, { useState } from 'react'
import Google from '../../assets/google.png';
import GitHub from '../../assets/github.png';
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { usersValidate } from '../../redux/actions/index';

const URL = 'https://students-henry.herokuapp.com/'
const Login = () => {

    const users = useSelector((state) => state.users.allUsers);
    const [input, setInput] = useState({
       email: "",
       password: "",
    });
	const dispatch = useDispatch();
    const validated = useSelector(state => state.users.userValidate)
    
	///FALTA INVESTIGAR COMO OBTENER EL EMAIL DEL USER DE GOOGLE
	// dispatch(getTodosUsuarios());
	// const userValidate = users.find((e) => e.name === user.displayName);
	// const category = userValidate && userValidate.email;
    
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        // console.log(input.email + '========> ONSubmit')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(usersValidate(input))
        console.log(validated)
    
}



const google = () => {
    window.open(URL +"/auth/google", "_self");
}
const github = () => {
    window.open(URL +"/auth/github", "_self");
}


    return (
        <div className='login'>
            <h1 className="loginTitle">Choose a Login Method ---- Funciona por faor!!!!</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className='icon' />
                        Google
                    </div>                   
                    <div className="loginButton github" onClick={github}>
                        <img src={GitHub} alt="" className='icon' />
                        GitHub
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' onChange={handleChange} value={input.email} name = "email" />
                    <input type="password" placeholder='Password'  onChange={handleChange} value={input.password} name = "password" />
                    <button className='submit'>Login</button>
                </form>
                </div>|
            </div>
        </div>
    )
}

export default Login