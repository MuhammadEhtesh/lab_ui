import Carousel from 'react-bootstrap/Carousel'
import {toAbsoluteUrl} from '../../../helpers'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Carousal.scss'

export function Carousal() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <Carousel>
              <Carousel.Item>
                <img
                  id='carousal'
                  className='d-block w-100'
                  src='https://picsum.photos/500/300?img=1'
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  id='carousal'
                  className='d-block w-100'
                  src='https://picsum.photos/500/300?img=2'
                  alt='Second slide'
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  id='carousal'
                  className='d-block w-100'
                  src='https://picsum.photos/500/300?img=3'
                  alt='Third slide'
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
