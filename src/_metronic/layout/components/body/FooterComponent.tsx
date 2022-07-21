import {Container, Grid, Box, Link, Button} from '@mui/material'
import './css/FooterComponent.scss'
import appstore from './img/app1.jpeg'
import googleplay from './img/app2.jpeg'
import accredited from './img/logo33.jpeg'
import license from './img/logo22.jpeg'

export const FooterComponent = () => {
  return (
    <Box px={{xs: 3, sm: 5}} py={{xs: 3, sm: 5}}>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <Box>
              <h4>Google Maps</h4>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <h4>Company Info</h4>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                <i className='fa fa-map-marker'></i>
                601 E Atlantic Blvd. Pompano Beach, FL 33060
              </Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                <i className='fa fa-phone'></i>
                954-333-8149
              </Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                <i className='fa fa-envelope'></i>
                customerservice@aemlinc.com
              </Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                <i className='bi bi-clock'></i>
                9:00 am to 5:00 pm EST, Monday to Friday
              </Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                <i className='bi bi-facebook'></i>
              </Link>
              <Link href='/' color='inherit'>
                <i className='bi bi-linkedin'></i>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <h4>App Info</h4>
            </Box>
            <Box>
              <Button style={{backgroundColor: 'white'}}>
                <img src={appstore} alt='example' />
              </Button>
            </Box>
            <Box>
              <Button style={{backgroundColor: 'white'}}>
                <img src={googleplay} alt='example1' />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <h4>ACCREDITATION</h4>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                <img src={accredited} alt='accred' />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box pt={{xs: 2}}>
          Copyrights © 2022. All rights reserved by
          <Link href='/' color='inherit' m={0.5} pt={1} style={{textDecoration: 'none'}}>
            Digilatics, Inc.
          </Link>
          <Link href='/' color='inherit' m={0.5} pt={1} style={{textDecoration: 'none'}}>
            Privacy Policy
          </Link>{' '}
          |
          <Link href='/' color='inherit' m={0.5} pt={1} style={{textDecoration: 'none'}}>
            Disclaimer
          </Link>
          |
          <Link href='/' color='inherit' m={0.5} pt={1} style={{textDecoration: 'none'}}>
            Terms & Conditions
          </Link>
        </Box>
      </Container>
    </Box>
  )
}
