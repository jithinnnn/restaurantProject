import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { loginAPI, registerAPI } from '../Services/allAPI'
import { useNavigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'


function Auth({insideRegister}) {   
    const [loginStatus,setLoginStatus] = useState(false)
     const navigate = useNavigate()
    const [userInputData,setUserInputData] = useState({
        username:"",email:"",password:""
    })
    const handleRegister = async (e)=>{
        e.preventDefault()
        console.log(userInputData);
        const {username,email,password} = userInputData
        if(!username || !email || !password){
            toast.info("Please fill the form completely!")
        }
        else{
            try{
                const result = await registerAPI(userInputData)
                if(result.status===200){
                    toast.success(`Welcome ${result.data.username}... Please login to explore our site!`)
                    setUserInputData({
                        username:"",email:"",password:""
                    })
                    navigate("/login")
                }else{
                    toast.error(result.response.data)
                }
            }catch(err){
                console.log(err);
            }
        }
    }
    const handleLogin = async (e)=>{
        e.preventDefault()
        const {email,password} = userInputData
        if(!email || !password){
            toast.info("Please fill the form completely!")
        }
        else{
            try{
                const result = await loginAPI({email,password})
                if(result.status===200){
                    sessionStorage.setItem("username",result.data.existingUser.username)
                    sessionStorage.setItem("email",result.data.existingUser.email)
                    sessionStorage.setItem("token",result.data.token)
                    setLoginStatus(true)
                    setTimeout(()=>{
                        setUserInputData({email:"",password:"" })
                        navigate("/home")
                        setLoginStatus(false)
                    },2000)
                }else{
                    toast.error(result.response.data)
                }
            }catch(err){
                console.log(err);
            }
        }
    }
  return (
    
    <div>
        <div style={{backgroundImage:'url(/home.jpg)',height:'619px',width:'100%',backgroundSize:'100%'}}>
            
            <div className='p-5 d-flex align-items-center justify-content-center' style={{backgroundColor:'black',opacity:'0.6',height:'619px'}}>
                {insideRegister?
                     <form action="">
                     <h5 style={{fontFamily:'Bebas Neue'}} className='p-2 text-white'>Sign {insideRegister?"Up":"In"} to your Account</h5>
                         <input className='form-control' type="text" placeholder='Email' value={userInputData.email} onChange={e=>setUserInputData({...userInputData,email:e.target.value})} />
                         <input className='form-control mt-2' type="text" placeholder='Username' value={userInputData.username} onChange={e=>setUserInputData({...userInputData,username:e.target.value})} />
                         <input className=' mt-2 form-control' type="text" placeholder='Password' value={userInputData.password} onChange={e=>setUserInputData({...userInputData,password:e.target.value})} />
                         <button onClick={handleRegister}  className='mt-2 btn btn-success homechild w-100'>{insideRegister?"Register":"Login"}</button>
                         <a href={insideRegister?'/login':'/register'} style={{fontFamily:'Bebas Neue',textDecoration:'none'}} className='p-2 mt-1 w-50 text-white'> {insideRegister?"Already Registered? Login here!":"Do not have an Account? Register Here!"}</a>
                     </form>:
                      <form action="">
                      <h5 style={{fontFamily:'Bebas Neue'}} className='p-2 text-white'>Sign {insideRegister?"Up":"In"} to your Account</h5>
                          <input className='form-control' type="text" placeholder='Email' value={userInputData.email} onChange={e=>setUserInputData({...userInputData,email:e.target.value})} />
                          <input className=' mt-2 form-control' type="text" placeholder='Password' value={userInputData.password} onChange={e=>setUserInputData({...userInputData,password:e.target.value})}/>
                          <button onClick={handleLogin} className='mt-2 btn btn-success homechild w-100'>{insideRegister?"Register":"Login"} {loginStatus&&<Spinner animation="border" variant="light" />}</button>
                          <a href={insideRegister?'/login':'/register'} style={{fontFamily:'Bebas Neue',textDecoration:'none'}} className='p-2 mt-1 w-50 text-white'> {insideRegister?"Already Registered? Login here!":"Do not have an Account? Register Here!"}</a>
                      </form>
                }
            </div>
        </div>
        <ToastContainer theme='colored'></ToastContainer>
    </div>
  )
}

export default Auth