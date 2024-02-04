import React from 'react'

function Auth({insideRegister}) {   
  return (
    <div>
        <div style={{backgroundImage:'url(/home.jpg)',height:'550px',width:'100%',backgroundSize:'100%'}}>
            
            <div className='p-5 d-flex align-items-center justify-content-center' style={{backgroundColor:'black',opacity:'0.6',height:'550px'}}>
                {insideRegister?
                     <form action="">
                     <h5 style={{fontFamily:'Bebas Neue'}} className='p-2 text-white'>Sign {insideRegister?"Up":"In"} to your Account</h5>
                         <input className='form-control' type="text" placeholder='Email' />
                         <input className='form-control mt-2' type="text" placeholder='Username' />
                         <input className=' mt-2 form-control' type="text" placeholder='Password' />
                         <button className='mt-2 btn btn-success homechild w-100'>{insideRegister?"Register":"Login"}</button>
                         <a href={insideRegister?'/login':'/register'} style={{fontFamily:'Bebas Neue',textDecoration:'none'}} className='p-2 mt-1 w-50 text-white'> {insideRegister?"Already Registered? Login here!":"Do not have an Account? Register Here!"}</a>
                     </form>:
                      <form action="">
                      <h5 style={{fontFamily:'Bebas Neue'}} className='p-2 text-white'>Sign {insideRegister?"Up":"In"} to your Account</h5>
                          <input className='form-control' type="text" placeholder='Email' />
                          <input className=' mt-2 form-control' type="text" placeholder='Password' />
                          <button className='mt-2 btn btn-success homechild w-100'>{insideRegister?"Register":"Login"}</button>
                          <a href={insideRegister?'/login':'/register'} style={{fontFamily:'Bebas Neue',textDecoration:'none'}} className='p-2 mt-1 w-50 text-white'> {insideRegister?"Already Registered? Login here!":"Do not have an Account? Register Here!"}</a>
                      </form>
                }
            </div>
        </div>
    </div>
  )
}

export default Auth