import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'


function Menu() {
  return (
    <div>
        <Header></Header>
        <div className=' text-center wood border text-white' style={{backgroundSize:'100%',fontFamily:'Bebas Neue',position:'relative',zIndex:'2'}}>
       <div style={{fontFamily:'Black Ops One'}} className='woodchild p-3'>
            <h1>EL MENU</h1>
            <u><h4>CHOOSE FROM ANY ONE OF OUR GREAT DISHES</h4></u><br /><br />
            <h2>El Pez Favoritos</h2>
            </div>
        <div className='woodchild container p-3'>
            <Row>
                <Col lg={6}>
                    <h3 style={{borderBottom:'2px solid'}}>Gyoza</h3>
                    <h5>Pan Fried Chicken, Pork, Vegetable Dumplings</h5><br />
                    <h3 style={{borderBottom:'2px solid'}}>Poke Bowls</h3>
                    <h5>Choice of Fish, Rice, Mango, Krab, Seaweed, Sprouts</h5><br />
                    <h3 style={{borderBottom:'2px solid'}}>Poke Salad</h3>
                    <h5>Choice of Fish, Spring Mix, Poke Sauce, Masago, Green Onions, Seeds</h5><br />
                </Col>
                <Col lg={6}>
                    <h3 style={{borderBottom:'2px solid'}}>YELLOWTAIL TOSTADAS</h3>
                    <h5>Coconut, Lime, Avocado, Cilantro, Radishes</h5><br />
                    <h3 style={{borderBottom:'2px solid'}}>SALMON KAMA</h3>
                    <h5>Salmon with Ponzu</h5><br />
                    <h3 style={{borderBottom:'2px solid'}}>CHIRASHI</h3>
                    <h5>Mixed Cuts of Fish Over Sushi Rice</h5><br />
                </Col>
            </Row>
        </div>
        <div style={{fontFamily:'Black Ops One'}} className='woodchild p-3'>
            <h2>Specialties</h2>
            </div>
            <div className='woodchild container p-3'>
            <Row>
                <Col lg={6}>
                    <h3 style={{borderBottom:'2px solid'}}>CARNITAS RAMEN</h3>
                    <h5>Pork Broth, Egg, Pork Belly, Bamboo, Cilantro, Radishes, Mexican Parmesan</h5><br />
                    <h3 style={{borderBottom:'2px solid'}}>SUSHI ROLLZ</h3>
                    <h5>California, Catepillar, Philadelphia, Spicy Tuna, Crunchy, Dragon and more...</h5><br />
                    <h3 style={{borderBottom:'2px solid'}}>SPECIALITY SASHIMI</h3>
                    <h5>Omakase Del Pez, Combo Sashimi, Tuna Crudo, Salmon Carpaccio and more...</h5><br />
                </Col>
                <Col lg={6}>
                    <h3 style={{borderBottom:'2px solid'}}>ANCHO UDON</h3>
                    <h5>Udon Noodles, Naruto Fish Cake, Shrimp Tempura</h5><br />
                    <h3 style={{borderBottom:'2px solid'}}>EL PEZ ROLLZ</h3>
                    <h5>Palm, Tokio Soul, Starfish, Shio-Gun, Buta, Fuego Azteca and more...</h5><br />
                    <h3 style={{borderBottom:'2px solid'}}>NIGIRI </h3>
                    <h5>Albacore, Smoked Salmon, Masago, Octopus, Scallop, Sweet Shrimp and more...</h5><br />
                </Col>
            </Row>
        </div>
        <div className='woodchild'>
            <img style={{width:'400px'}} src="/sushi.png" alt="" />
            <h1 className='fs-1'>Want More?</h1>
            <h3 className='fs-4'>CHECK OUT OUR FULL MENU BELOW TO SEE EVERYTHING EL PEZ HAS TO OFFER</h3>
            <a href='https://assets.website-files.com/5c4cca23dfbd6c62b6254405/6413b36525deb1665df1f448_Menu%20Sir%20Speedy.pdf'><button className='m-4 btn btn-warning fs-2 p-3'>View the Full Menu</button></a>
        </div>
       </div>
    </div>
  )
}

export default Menu