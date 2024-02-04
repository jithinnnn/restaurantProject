import React from 'react'
import { Col, Row } from 'react-bootstrap'


function Home() {
  return (
    <div>
        <div style={{height:'550px',backgroundImage:"url(/home.jpg)",backgroundSize:'100%'}}>
            <div style={{opacity:'0.6', flexDirection:'column'}} className=' p-4 d-flex align-items-center justify-content-center bg-black'>
                <img style={{width:"200px"}} src="https://i.postimg.cc/FHSKX03m/5c4cf99ac49ea64f5db0dd41-el-pez-sushi5-p-500.png" alt="" />
            </div>
            <div style={{opacity:'0.6'}} className='p-2 d-flex align-items-center justify-content-center bg-black text-white'>
            <h1 style={{fontFamily:'Bebas Neue'}}>HECHO FRESCO</h1>
            </div>
            <div style={{opacity:'0.6'}} className='p-3 d-flex align-items-center justify-content-center bg-black text-white'>
            <h4 style={{fontFamily:'Bebas Neue'}}>OUR SUSHI IS MADE ONLY FROM THE FINEST AND FRESHEST INGREDIENTS.</h4>
            </div>
        </div>
        <div >
            <div style={{backgroundImage:"url(/floral.png)"}}>
                <div className=' p-5 d-flex align-items-center justify-content-center'>
                    <Row>
                        <Col lg={6} md={3} className='p-0'><img style={{width:'100%',height:'500px'}} src="https://i.postimg.cc/LXD7W4TL/thumb-5584-hero-vertical-rectangle.jpg" alt="" /></Col>
                        <Col lg={6} md={3} className='p-3' style={{backgroundColor:'#F3E5F5',height:'500px'}}><h3 style={{textAlign:'center',fontFamily:'Bebas Neue'}}>WELCOME TO THE NEIGHBOURHOOD</h3>
                        <h5 style={{textAlign:'center',lineHeight:'1.5',fontFamily:'Dancing Script'}} className='p-3'>Hungry Sushi fans and foodies of South Bay, we'd like to introduce<br /> you to our neighborhood sushi kitchen El Pez.<br />
    Made up folks who've been running some of the finest sushi <br /> restaurants around Kochi,we wanted to bring back a <br /> taste of everything we've learned to the great South Bay<br /> communities we grew up in.
    Come on in and try us out.<br /></h5></Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home