import React, {  useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {
    // console.log("setShowLogin:", setShowLogin);
    const {url,token,setToken}=useContext(StoreContext)
    const [currState,SetCurrState]=useState("Sign Up")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
    })
    const onChangeHandler =(event)=>{
        const name =event.target.name
        const value =event.target.value
        setData(data =>({...data,[name]:value}))
    }


    const onLogin = async (event)=>{
        event.preventDefault()
        let newUrl=url;
        if(currState==="Login"){
            newUrl+="/api/user/login"
        }else{
            newUrl+="/api/user/register"
        }
        const response = await axios.post(newUrl,data)
        console.log(response.data)
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }
    }
    // useEffect(()=>{
    //     console.log(data)
    // },[data])
  return (
    <div  className='login-popup'>
        <form onSubmit={onLogin} action="" className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login" ? <></>: <input name='name' onChange={onChangeHandler} value={data.name}  type="text" placeholder='Your Name' required />}
                {/* <input type="text" placeholder='Your Nmae' required /> */}
                <input name='email' onChange={onChangeHandler} value={data.email}  type="email" placeholder='Email' required />
                <input name='password' onChange={onChangeHandler} value={data.password}  type="password" placeholder='Password' required />
            </div>
            <button type='submit'>{currState==="Sign Up" ? "Create account":"Log In"}</button>
            <div className="login-popup-condition">
                <input type='checkbox' required/><p>By continuing I agree to terms of use & privacy policy</p>
            </div>
            {currState==="Login" ? <p>Create A New Account ? <span onClick={()=>SetCurrState("Sign Up")}>Click Here</span></p>  :<p>Already Have An Account? <span onClick={()=> SetCurrState("Login")}>Login Here</span></p> }
            {/* <p>Create A New Account ? <span>Click Here</span></p> */}
            
        </form>
    </div>
  )
}

export default LoginPopup