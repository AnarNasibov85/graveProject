import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Link,
  Grid,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Image from 'next/image';

function Login() {
  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          left: 10,
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Image
          src='/logo.svg'
          alt='Logo'
          width={150}
          height={100}
        />
    
      </Box>

      <Grid
        container
        sx={{ height: '100vh' }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <Typography
              component='h1'
              variant='h5'
              sx={{ width: '100%', textAlign: 'left', paddingBottom: '10px' }}
            >
              Sign in
            </Typography>
            <Typography
              variant='body2'
              sx={{ width: '100%', textAlign: 'left', paddingBottom: '10px' }}
            >
              Don't have an account?{' '}
              <Link
                href='/register'
                variant='body2'
              >
                Sign up
              </Link>
            </Typography>

            <Box
              component='form'
              noValidate
              sx={{ width: '100%' }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email address'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        edge='end'
                      >
                        <VisibilityOff />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container>
                <Grid
                  item
                  xs
                >
                  <Link
                    href='#'
                    variant='body2'
                  >
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#CE1535',
                  '&:hover': {
                    backgroundColor: '#CE1535',
                  },
                }}
              >
                Sign in
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src='/cat.svg'
            alt='Login Image'
            width={400}
            height={400}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;