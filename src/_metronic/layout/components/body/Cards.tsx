import Card from 'react-bootstrap/Card'
import './css/Cards.scss'
import accredited from './img/logo33.jpeg'
import license from './img/logo22.jpeg'

export function Cards() {
  return (
    <div className='container-fluid d-flex justify-content-center mt-4'>
      <div className='row'>
        <div className='col-md-4'>
          <Card className='card h-100 shadow-lg custom-radius'>
            <Card.Body>
              <Card.Title className='text-center'>Why Choose Digilatics, Inc.?</Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Same Day Turnaround
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Free Rush Service
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Free Inbound Shipping
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Free Swabs and Tapes
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Excellent Customer Service
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    We always read 100% of the trace at 600x
                  </li>
                </ul>
              </Card.Text>
              <div className='text-center'>
                <Card.Link href='#' className='btn btn-danger'>
                  Learn More
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4'>
          <Card className='card h-100 shadow-lg custom-radius'>
            <Card.Body>
              <Card.Title className='text-center'>
                Accredited Laboratory founded by Scientists with Decades of Lab Testing Experience.
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    A2LA Accredited (Testing Cert #2502.01)
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    <a href='../Content/doc/Why A2LA accreditation.pdf' target='_blank'>
                      Why A2LA?
                    </a>
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Texas Department Of State Health Services License Lab #1020
                  </li>
                  <div>
                    <div className='text-center'>
                      <Card.Link href='#'>
                        <img src={accredited} alt='accred' />
                      </Card.Link>
                      <Card.Link href='#'>
                        <img src={license} alt='accred' />
                      </Card.Link>
                    </div>
                  </div>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4'>
          <Card className='card h-100 shadow-lg custom-radius'>
            <Card.Body>
              <Card.Title className='text-center'>
                Digilatics LIMS: 24/7 access to your personal account anywhere.
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Easy Access to Reports/Invoices
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Access your Digital Chain of Custody
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Track Your Project's Progress in Real Time
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Digitally Submit Your Samples to the Lab
                  </li>
                  <li>
                    <span>
                      <i className='fa fa-arrow-right'></i>
                    </span>
                    Tour the Digilatics LIMS System
                    <span>
                      <strong>HERE</strong>
                    </span>
                  </li>
                </ul>
              </Card.Text>
              <div className='text-center'>
                <Card.Link href='#' className='btn btn-danger'>
                  Access LIMS
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
