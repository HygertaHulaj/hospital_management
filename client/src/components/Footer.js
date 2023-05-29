import React from 'react';
import { Container, Grid, Link, Typography } from '@material-ui/core';
import { Facebook, Twitter,  Instagram, LinkedIn, GitHub } from '@material-ui/icons';

export default function App() {
  return (
    <footer style={{ backgroundColor: '#222099', color: 'white' }} className='text-center text-lg-start'>
      <section style={{ justifyContent: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }} className='d-flex justify-content-center justify-content-lg-between p-4'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link href='' className='me-4'>
            <Facebook color='secondary' />
          </Link>
          <Link href='' className='me-4'>
            <Twitter color='secondary' />
          </Link>
         
          <Link href='' className='me-4'>
            <Instagram color='secondary' />
          </Link>
          <Link href='' className='me-4'>
            <LinkedIn color='secondary' />
          </Link>
          <Link href='' className='me-4'>
            <GitHub color='secondary' />
          </Link>
        </div>
      </section>

      <section>
        <Container className='text-center text-md-start mt-5'>
          <Grid container spacing={3} className='mt-3'>
            <Grid item md={3} lg={4} xl={3} className='mx-auto mb-4'>
              <Typography variant='h6' className='text-uppercase fw-bold mb-4'>
                <span style={{ marginRight: '0.5rem' }} className='icon-gem'>
                  {/* Use your own gem icon */}
                </span>
                CareMed Hospital
              </Typography>
              <Typography>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
            </Grid>

            <Grid item md={2} lg={2} xl={2} className='mx-auto mb-4'>
              <Typography variant='h6' className='text-uppercase fw-bold mb-4'>About</Typography>
              <Typography>
                <Link href='./departments' color='inherit'>Departments</Link>
              </Typography>
              <Typography>
                <Link href='./services' color='inherit'>Service</Link>
              </Typography>
              <Typography>
                <Link href='./doctors' color='inherit'>Doctor</Link>
              </Typography>
              <Typography>
                <Link href='' color='inherit'>Patient</Link>
              </Typography>
            </Grid>

            <Grid item md={3} lg={2} xl={2} className='mx-auto mb-4'>
              <Typography variant='h6' className='text-uppercase fw-bold mb-4'>Useful links</Typography>
              <Typography>
                <Link href='#!' color='inherit'>Appointment</Link>
              </Typography>
              <Typography>
                <Link href='#!' color='inherit'>Bood Doantion</Link>
              </Typography>
              <Typography>
                <Link href='#!' color='inherit'>Donate Now</Link>
              </Typography>
             
            </Grid>

            <Grid item md={4} lg={3} xl={3} className='mx-auto mb-md-0 mb-4'>
              <Typography variant='h6' className='text-uppercase fw-bold mb-4'>Contact</Typography>
              <Typography>
                <span style={{ marginRight: '0.5rem' }} className='icon-home'>
                  {/* Use your own home icon */}
                </span>
                New York, NY 10012, US
              </Typography>
              <Typography>
                <span style={{ marginRight: '0.5rem' }} className='icon-envelope'>
                  {/* Use your own envelope icon */}
                </span>
                info@example.com
              </Typography>
              <Typography>
                <span style={{ marginRight: '0.5rem' }} className='icon-phone'>
                  {/* Use your own phone icon */}
                </span>
                + 01 234 567 88
              </Typography>
              <Typography>
                <span style={{ marginRight: '0.5rem' }} className='icon-print'>
                  {/* Use your own print icon */}
                </span>
                + 01 234 567 89
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <Typography>
        CareMed Hospital  © 2023
        
        </Typography>
      </div>
    </footer>
  );
}
