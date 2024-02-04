import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Difference() {
  return (
    <div>
        <div style={{backgroundImage:"url(/floral.png)"}}>
                <div className=' p-5 d-flex align-items-center justify-content-center container w-75'>
                    <Row>
                        <Col lg={6} md={3} className='p-0'><img style={{width:'100%',height:'500px'}} src="/burger.jpg" alt="" /></Col>
                        <Col lg={6} md={3} className='p-3' style={{backgroundColor:'#F3E5F5',height:'50%'}}>
                            <img style={{width:'150px'}} src="/shell.png" alt="" />
                            <h1 style={{textAlign:'center',fontFamily:'Bebas Neue'}}>COME FOR THE FOOD</h1>
                        <h5 style={{textAlign:'center',lineHeight:'1.5',fontFamily:'Dancing Script'}} className='p-3'>We've got everything from Poke Bowls, Salads, and Specialty Sushi Rolls. <br /> All with a Mexican inspired twist. <br />

I mean, Carnitas Ramen, why aren't you eating this right now?</h5></Col>
                    </Row>
                </div>
                <div className=' p-5 d-flex align-items-center justify-content-center container w-75'>
                <Row>
                <Col lg={6} md={3} className='p-3' style={{backgroundColor:'#F3E5F5',height:'50%'}}>
                            <img style={{width:'150px'}} src="/shell.png" alt="" />
                            <h1 style={{textAlign:'center',fontFamily:'Bebas Neue'}}>STAY FOR THE BEERS</h1>
                        <h5 style={{textAlign:'center',lineHeight:'1.5',fontFamily:'Dancing Script'}} className='p-3'>With 6 of the finest local beers on tap and both Japenese and Mexican imports, El Pez is the spot to hit up after a day of work or break from the surf.</h5></Col>
                        <Col lg={6} md={3} className='p-0'><img style={{width:'100%',height:'500px'}} src="/beer.png" alt="" /></Col>
                    </Row>
                </div>
            </div>
    </div>
  )
}

export default Difference