import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const BloodDonation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    birthdate: '',
    city: '',
    state: '',
    service: '',
    date: '',
    time: '',
    message: '',
    saveAddress: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleBirthdateChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      birthdate: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!');
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your data
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              value={formData.address1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address2"
              name="address2"
              label="Your phone number"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              value={formData.address2}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="birthdate"
              name="birthdate"
              label="Birthdate"
              type="date"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.birthdate}
              onChange={handleBirthdateChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"              fullWidth
              variant="standard"
              value={formData.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id="service-label">Select your service</InputLabel>
            <Select
              required
              id="service"
              name="service"
              labelId="service-label"
              fullWidth
              variant="standard"
              value={formData.service}
              onChange={handleChange}
            >
              <MenuItem value="emergency1">Emergency Service 1</MenuItem>
              <MenuItem value="service2">Service 2</MenuItem>
              <MenuItem value="service3">Service 3</MenuItem>
              <MenuItem value="checkup">Regular Checkup</MenuItem>
              <MenuItem value="surgery">Surgery</MenuItem>
              <MenuItem value="therapy">Therapy</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="date"
              name="date"
              label="Date"
              type="date"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.date}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="time"
              name="time"
              label="Time"
              type="time"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.time}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  name="saveAddress"
                  checked={formData.saveAddress}
                  onChange={handleChange}
                />
              }
              label="Use this address for payment details"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default BloodDonation;

