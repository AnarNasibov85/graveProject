import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Link,
  Checkbox,
  FormControlLabel,
  Grid
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Image from 'next/image';

function Register() {
  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          left: 10,
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          cursor: "pointer",
        }}
      >
        <Image src='/logo.svg' alt='Logo' width={150} height={100} />
   
      </Box>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              marginTop: 25,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '100%', md: '440px' },
              padding: { xs: '20px', md: '0' },
              height: '536px',
              marginLeft: { xs: '0', md: '76px' },
            }}
          >
            <Typography  component='h1' variant='h5' sx={{ width: '100%', textAlign: 'left', paddingBottom: '10px' }}>
            Sign up
            </Typography>
            <Typography variant='body2' sx={{ width: '100%', textAlign: 'left', paddingBottom: '10px' }}>
            Already have an account?{' '}
              <Link href='/login' variant='body2'>
              Sign in
              </Link>
            </Typography>
            <Box component='form' noValidate sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='firstName'
                label='name'
                name='firstName'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='surname'
                label='Surname'
                name='surname'
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email address'
                name='email'
                autoComplete='email'
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='password'
                type='password'
                id='password'
                autoComplete='current-password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton edge='end'>
                        <VisibilityOff />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              
            
            <Button
  type='submit'
  fullWidth
  variant='contained'
  sx={{
    mt: 3,
    mb: 2,
    backgroundColor: '#CE1535',
    color: 'white',
  }}
>
  Sign Up
</Button>
<FormControlLabel
                control={
                  <Checkbox
                    name='terms'
                    color='secondary'
                  />
                }
                label='I agree to your  Terms of seivice & Privacy Policy'
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src='/cat.svg' alt='Login Image' className='w-full h-[100vh] md:mt-0 mt-28' width={741} height={812} style={{ objectFit: 'cover' }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Register;



