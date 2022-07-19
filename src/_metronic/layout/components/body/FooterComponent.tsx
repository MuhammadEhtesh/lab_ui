import {Container, Grid, Box, Link} from '@mui/material'

export const FooterComponent = () => {
  return (
    <Box px={{xs: 3, sm: 10}} py={{xs: 3, sm: 10}}>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box>
              <h4>Google Maps</h4>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
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
        </Grid>
      </Container>
    </Box>
  )
}
