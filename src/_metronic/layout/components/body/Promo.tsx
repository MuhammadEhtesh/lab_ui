import React from 'react'
import './css/Promo.scss'

export const Promo = () => {
  return (
    <div id='backgrad' className='mt-6'>
      <div className='container' id='text-marg'>
        <div className='row justify-content-center'>
          <div className='col-md-12 col-lg-12'>
            <div className='text-center text-white'>
              <h2
                className='
              text-white'
              >
                Download Our Mobile App Today!
              </h2>
              <p className='lead'>
                AEML Mobile Lab makes your job easier by providing 24/7 access to your laboratory
                needs and puts convenience in your pocket!
              </p>
              <div id='btnmarg'>
                <button
                  type='button'
                  className='btn btn-outline-primary btn-lg'
                  style={{marginRight: '0.5rem'}}
                  id='border-button'
                >
                  {/* <i className='bi bi-apple text-white'></i> */}
                  <span
                    className='
              text-white'
                  >
                    Download from
                  </span>
                  <h5
                    className='
              text-white'
                  >
                    App Store
                  </h5>
                </button>
                <button
                  type='button'
                  className='btn btn-outline-primary btn-lg'
                  style={{marginRight: '0.5rem'}}
                  id='border-button'
                >
                  <span
                    className='
              text-white'
                  >
                    Download from
                  </span>
                  <h5
                    className='
              text-white'
                  >
                    Google Play
                  </h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
