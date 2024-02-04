import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Contact() {
  return (
    <div>
        <div style={{backgroundImage:'url(/home.jpg)',backgroundSize:'100%',overflowX:'hidden',height:'550px'}}>
            <div className='bg-black' style={{opacity:'0.6'}}>
                <div className=' text-center'>
                    <Row className='w-100' style={{overflowX:'none'}}>
                        <Col style={{fontFamily:'Bebas Neue'}} className='p-4' lg={6} md={3}>
                            <h6 className='text-white'>Address</h6>
                            <h4 className='text-white'>3404 PALM AVE,<br />
                            SAN DIEGO, CA 92154,<br />   USA</h4><br />
                            <h6 className='text-white'>Phone</h6>
                            <h4 className='text-white'>(619) 600-3161</h4><br />
                            <h6  style={{lineHeight:'3'}}  className='text-white'>Hours</h6>
                            <h4 style={{lineHeight:'0'}} className='text-white'>MON/THU - 11:30AM - 9PM</h4>
                            <h4 className='text-white'>FRI/SAT - 11:30AM - 10PM</h4>
                            <h4  style={{lineHeight:'0'}}  className='text-white'>SUN - CLOSED</h4><br /><br /><br />   
                            <h6 className='text-white'> Copyright 2018-2019 @ El Pez</h6>
                        </Col>
                        <Col style={{fontFamily:'Bebas Neue'}} lg={6} md={3}>
                            <img style={{width:'200px'}} src="https://i.postimg.cc/gJBpbcT7/fish.png" alt="" />
                            <h2 className='text-white'>SOMEONE SAY CATERING?</h2>
                            <form>
                               <input className='form-control w-50 container' type="text" placeholder='Name'/><br />
                               <input className='form-control w-50 container' type="text" placeholder='Email Address'/><br />
                               <input className='form-control w-50 container' type="text" placeholder='Phone Number'/><br />
                               <button className='btn btn-warning w-50 container'>Submit</button>
                            </form>
                        
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact