import {Container, Grid, Box, Link, Button} from '@mui/material'

export const FooterCopyRight = () => {
  return (
    <Box
      px={{xs: 1, sm: 2}}
      py={{xs: 1, sm: 2}}
      bgcolor='primary.main'
      className='
              text-white text-center'
    >
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
  )
}
