import { Container, Nav, Navbar } from 'react-bootstrap'


function Header() {
  const handleLogout=()=>{
    sessionStorage.clear()
  }
  return (
    <div style={{overflowX:'hidden'}}>
        <Navbar expand="lg" style={{backgroundImage:"url(/home.jpg)",backgroundSize:'100%'}} className="navbar-white">
      <Container>
        <Navbar.Brand href="/home"><img
              alt=""
              src="https://i.postimg.cc/gkrNXP9R/fish-an-illustration-of-a-fish-logo-with-a-variety-of-letters-that-make-up-a-fish-free-vector-1-re.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
        <Navbar.Toggle className='text-white' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white m-2' href="/">Our Story</Nav.Link>
            <Nav.Link className='text-white m-2' href="/menu"> Our Menu</Nav.Link>
            <Nav.Link className='text-white m-2' href="/difference">Our Differences</Nav.Link>
            <Nav.Link className='text-white m-2' href="/contact">Contact</Nav.Link>
            <Nav.Link className='text-white m-2' href="https://www.doordash.com/store/el-pez-kitchen-and-sushi-san-diego-710770/">Order</Nav.Link>
          </Nav>
          <Nav className='ms-auto '> <Nav.Link href='/register'><button onClick={handleLogout} className=' btn btn-info m-2'>LogOut</button></Nav.Link></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header