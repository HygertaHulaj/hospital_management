import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
// import PaymentForm from './PaymentForm';
import Review from './Review';

function Checkout() {
    const [activeStep, setActiveStep] = useState(0);
    const [shippingAddress, setShippingAddress] = useState({});
  
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
    const handleAddressFormSubmit = (data) => {
      setShippingAddress(data);
      handleNext(); // Proceed to the next step after submitting the address form
    };
  
    const steps = ['Write your data', 'Review your data','Make the appointment'];
  
    function getStepContent(step) {
        switch (step) {
          case 0:
            return <AddressForm onSubmit={handleAddressFormSubmit} />;
          case 1:
            return <Review shippingAddress={shippingAddress} />; // Pass the shippingAddress data to Review
          default:
            throw new Error('Unknown step');
        }
      }
      
      
  
    const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="absolute" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Make an Appointment
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
        <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            We are here for you
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Checkout;
