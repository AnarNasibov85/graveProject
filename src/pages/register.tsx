import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Checkbox,
  FormControlLabel,
  Grid,
} from '@mui/material';

import Image from 'next/image';
import Header from '@/components/Header';

function Register() {
  return (
    <div>
      {/* Header with consistent design */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: 2,
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        <Header className="text-white" />
      </Box>

      <Grid container sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            sx={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '100%', md: '400px' },
              padding: { xs: '20px', md: '0' },
              height: '536px',
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ width: '100%', textAlign: 'left', paddingBottom: '10px' }}
            >
              Sign up
            </Typography>
            <Typography
              variant="body2"
              sx={{ width: '100%', textAlign: 'left', paddingBottom: '10px' }}
            >
              Already have an account?{' '}
              <Link href="/login" variant="body2">
                Sign in
              </Link>
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="Name"
                name="firstName"
                sx={{
                  width: '400px',
                  '& .MuiOutlinedInput-root': {
                    
                  },
                  '& input': {
                    height: '48px',
                    padding: '0 14px',
                    backgroundColor: '#FEFAFA',
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="surname"
                label="Surname"
                name="surname"
                sx={{
                  width: '400px',
                  '& .MuiOutlinedInput-root': {
                   
                  },
                  '& input': {
                    height: '48px',
                    padding: '0 14px',
                    backgroundColor: '#FEFAFA',
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email address"
                name="email"
                sx={{
                  width: '400px',
                  '& .MuiOutlinedInput-root': {

                  },
                  '& input': {
                    height: '48px',
                    padding: '0 14px',
                    backgroundColor: '#FEFAFA',
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                sx={{
                  width: '400px',
                  '& .MuiOutlinedInput-root': {

                  },
                  '& input': {
                    height: '48px',
                    padding: '0 14px',
                    backgroundColor: '#FEFAFA',
                  },
                }}
              />
              {/* Confirm Password Field */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                sx={{
                  width: '400px',
                  '& .MuiOutlinedInput-root': {

                  },
                  '& input': {
                    height: '48px',
                    padding: '0 14px',
                    backgroundColor: '#FEFAFA',
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#CE1535',
                  color: 'white',
                  width: '400px',
                  height: '48px',
                }}
              >
                Sign Up
              </Button>
              <FormControlLabel
                control={
                  <Checkbox
                    name="terms"
                    color="secondary"
                  />
                }
                label="I agree to your Terms of Service & Privacy Policy"
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/cat.svg"
            alt="Login Image"
            width={741}
            height={812}
            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Register;
