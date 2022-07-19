export const FooterComponent = () => {
  return (
    <div className='main-footer mt-4'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h4>Google Map</h4>
          </div>
          <div className='col'>
            <h4>Company Info</h4>
            <ul>
              <li>
                <i className='fa fa-map-marker text-black'></i>
                <a target='_blank' href='#'>
                  601 E Atlantic Blvd. Pompano Beach, FL 33060{' '}
                </a>
              </li>
              <li>
                <i className='fa fa-phone text-black'></i>
                <a target='_blank' href='#'>
                  954-333-8149{' '}
                </a>
              </li>
              <li>
                <i className='fa fa-envelope text-black'></i>
                <a target='_blank' href='#'>
                  customerservice@aemlinc.com{' '}
                </a>
              </li>
              <li>
                <i className='bi bi-clock text-black'></i>
                <a target='_blank' href='#'>
                  9:00 am to 5:00 pm EST, Monday to Friday{' '}
                </a>
              </li>
              <li>
                <a target='_blank' href='#'>
                  <i className='bi bi-facebook'></i>{' '}
                </a>
                <a target='_blank' href='#'>
                  <i className='bi bi-linkedin'></i>{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
