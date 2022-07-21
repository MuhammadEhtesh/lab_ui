import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {toAbsoluteUrl} from '../../../helpers'
import './css/HeaderSecondWrapper.scss'

export const HeaderSecondWrapper = () => {
  const [showAbout, setShowAbout] = useState(false)
  const [showService, setShowService] = useState(false)
  const [showShop, setShowShop] = useState(false)
  const [showResource, setShowResource] = useState(false)
  const [showTraining, setShowTraining] = useState(false)
  const showDropdown = (id: any) => {
    if (id.target.text == 'About') {
      setShowAbout(!showAbout)
    }
    if (id.target.text == 'Services') {
      setShowService(!showService)
    }
    if (id.target.text == 'Shop Online') {
      setShowShop(!showShop)
    }
    if (id.target.text == 'Resources') {
      setShowResource(!showResource)
    }
    if (id.target.text == 'Training Center') {
      setShowTraining(!showTraining)
    }
  }

  const hideDropdown = (id: any) => {
    if (id.target.text !== 'About') {
      setShowAbout(false)
    }
    if (id.target.text !== 'Services') {
      setShowService(false)
    }
    if (id.target.text !== 'Shop Online') {
      setShowShop(false)
    }
    if (id.target.text !== 'Resources') {
      setShowResource(false)
    }
    if (id.target.text !== 'Training Center') {
      setShowTraining(false)
    }
  }
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src={toAbsoluteUrl('/media/logos/logo-landing-dark.svg')}
            className='d-inline-block align-top svg-icon-3'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <NavDropdown
              title={
                <span>
                  <i className='bi bi-hospital' style={{color: 'red'}}></i>
                  About
                </span>
              }
              id='basic-nav-dropdown'
              show={showAbout}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> About Digilatics
                <NavDropdown.Divider />
                <NavDropdown.Item href='/'>
                  <i className='fas fa-caret-right'></i> Our Accredations
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown.Item>
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Take a Survey
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  <i className='fa fa-flask' style={{color: 'red'}}></i>
                  Services
                </span>
              }
              id='basic-nav-dropdown'
              show={showService}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Mold Analysis
                <NavDropdown.Divider />
                <NavDropdown.Item href='/'>
                  <i className='fas fa-caret-right'></i> Mold Lab Testing Services
                </NavDropdown.Item>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Free Pump Rentals for Clients
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Other Environmental Services
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  <i className='fa fa-shopping-cart' style={{color: 'red'}}></i>
                  Shop Online
                </span>
              }
              id='basic-nav-dropdown'
              show={showShop}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Laboratory Supplies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Microscope Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Sampling Pump Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Sampling Pumps
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Sampling Supplies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Spore Traps
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Spore Traps Sampling Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Surface Sampling
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  <i className='fa fa-user' style={{color: 'red'}}></i>
                  Resources
                </span>
              }
              id='basic-nav-dropdown'
              show={showResource}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> New Client
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Chain of Custody
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Credit Card Terms Form
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Print Shipping Labels
                <NavDropdown.Divider />
                <NavDropdown.Item href='/'>
                  <i className='fas fa-caret-right'></i> FedEx label
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/'>
                  <i className='fas fa-caret-right'></i> UPS label
                </NavDropdown.Item>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Download Mobile App
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  <i className='fa fa-book' style={{color: 'red'}}></i>
                  Training Center
                </span>
              }
              id='basic-nav-dropdown'
              show={showTraining}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Video Tutorials
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Questions & Answers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
                <i className='fas fa-caret-right'></i> Upcoming Events
                <NavDropdown.Divider />
                <NavDropdown.Item href='/'>
                  <i className='fas fa-caret-right'></i> 05-Sep-2022 - Labor Day: Digilatics is
                  Closed
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/'>
                  <i className='fas fa-caret-right'></i> Nov.24-25, 2022 - Thanksgiving: Digilatics
                  is Closed
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/'>
                  <i className='fas fa-caret-right'></i> 26-Dec-2022 - Christmas Observed:
                  Digilatics is Closed
                </NavDropdown.Item>
              </NavDropdown.Item>
            </NavDropdown>
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
