import {Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {toAbsoluteUrl} from '../../../helpers'
import './css/HeaderSecondWrapper.scss'

export function HeaderSecondWrapper() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src={toAbsoluteUrl('/media/avatars/300-1.jpg')}
            width='150px'
            height='70px'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link href='#about'>
              <i className='bi bi-hospital' style={{color: 'red'}}></i> About Us
            </Nav.Link>
            <Nav.Link href='#services'>
              <i className='fa fa-flask' style={{color: 'red'}}></i> Services
            </Nav.Link>
            <Nav.Link href='#online'>
              <i className='fa fa-shopping-cart' style={{color: 'red'}}></i> Shop Online{' '}
            </Nav.Link>
            <Nav.Link href='#resources'>
              <i className='fa fa-user' style={{color: 'red'}}></i> Resources{' '}
            </Nav.Link>
            <Nav.Link href='#traing'>
              <i className='fa fa-book' style={{color: 'red'}}></i> Training Center{' '}
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <div>
          <Button variant='warning' style={{marginRight: '0.5rem'}}>
            Client Log In
          </Button>
          <Button variant='primary' style={{marginLeft: '0.5rem'}}>
            New Client
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}
