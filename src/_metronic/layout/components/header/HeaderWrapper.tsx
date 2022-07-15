import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Form} from 'react-bootstrap'
import './css/HeaderWrapper.scss'
import {MDBIcon} from 'mdbreact'

export function HeaderWrapper() {
  return (
    // <Navbar bg='primary' expand='lg'>
    //   <Container>
    //     <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //     <Navbar.Collapse id='basic-navbar-nav'>
    //       <Nav className='me-auto'>
    //         <div className='d-flex justify-content-start'>
    //           <Nav.Link href='#email' style={{color: 'white'}}>
    //             <i className='bi bi-envelope' style={{color: 'white'}}></i> shani@gmail.com
    //           </Nav.Link>
    //           <Nav.Link href='#phone' style={{color: 'white'}}>
    //             <i className='fa fa-phone' style={{color: 'white'}}></i> 03204033575
    //           </Nav.Link>
    //           <Nav.Link href='#search'>
    //             <input type='text' placeholder='Search' aria-label='Search' />{' '}
    //             <MDBIcon icon='search' style={{color: 'white'}} />
    //           </Nav.Link>
    //         </div>

    //         <div className='d-flex justify-content-end'>
    //           <Nav.Link href='#contact' style={{color: 'white'}}>
    //             Contact US
    //           </Nav.Link>
    //           <Nav.Link href='#printshipping' style={{color: 'white'}}>
    //             Print Shipping Labels
    //           </Nav.Link>
    //           <Nav.Link href='#careers' style={{color: 'white'}}>
    //             Careers
    //           </Nav.Link>
    //           <Nav.Link href='#cart' style={{color: 'white'}}>
    //             <MDBIcon icon='cart-plus' style={{color: 'white'}} /> 0 item{' '}
    //           </Nav.Link>
    //           <Nav.Link href='#facebook' style={{color: 'white'}}>
    //             <MDBIcon fab icon='facebook-f' style={{color: 'white'}} />
    //           </Nav.Link>
    //           <Nav.Link href='#linkedin' style={{color: 'white'}}>
    //             <i className='bi bi-linkedin' style={{color: 'white'}}></i>
    //           </Nav.Link>
    //         </div>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home' className='text-white'>
              <i className='bi bi-envelope' style={{color: 'white'}}></i>{' '}
              Customerservice@Digilatics.com
            </Nav.Link>
            <span className='text-white' style={{marginTop: '08px'}}>
              |
            </span>
            <Nav.Link href='#link' className='text-white' style={{marginTop: '2px'}}>
              <i className='fa fa-phone' style={{color: 'white'}}></i>{' '}
              <span style={{marginLeft: '2px'}}>954-654-6654</span>
            </Nav.Link>
            <Nav.Link>
              <Form>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Control id='search-topbar-input' type='email' placeholder='Enter email' />
                </Form.Group>
              </Form>
            </Nav.Link>
            <Nav.Link>
              <MDBIcon icon='search' style={{color: 'white'}} />
            </Nav.Link>
            <span className='text-white' style={{marginTop: '08px'}}>
              |
            </span>
            <Nav.Link href='#home' className='text-white'>
              Contact Us!
            </Nav.Link>
            <span className='text-white' style={{marginTop: '08px'}}>
              |
            </span>
            <Nav.Link href='#home' className='text-white'>
              Print Shipping Labels
            </Nav.Link>
            <span className='text-white' style={{marginTop: '08px'}}>
              |
            </span>
            <Nav.Link href='#home' className='text-white'>
              Careers
            </Nav.Link>
            <span className='text-white' style={{marginTop: '08px'}}>
              |
            </span>
            <Nav.Link href='#home' className='text-white'>
              <MDBIcon icon='cart-plus' style={{color: 'white'}} /> 0 Item
            </Nav.Link>
            <Nav.Link href='#facebook' style={{color: 'white'}}>
              <MDBIcon fab icon='facebook-f' style={{color: 'white'}} />
            </Nav.Link>
            <Nav.Link href='#linkedin' style={{color: 'white'}}>
              <i className='bi bi-linkedin' style={{color: 'white'}}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
