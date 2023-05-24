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
  ListItem,
  ListItemText,
  List,
  ListItemIcon
} from '@mui/material';
import Topbar from '../components/topbar';


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
  const [bloodGroup, setBloodGroup] = useState('');

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
  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!');
  };

  return (
    
    <React.Fragment >
      <Topbar name="Bood Doantion" ></Topbar>
      <h1>Be a Hero: Make a Difference through Blood Donation</h1>
      <h3><em>Every year, millions of lives are saved thanks to the selfless act of blood donation. By donating blood, you become a hero, contributing to the well-being and survival of people in need.
         Whether it's for emergencies, surgeries, or ongoing medical treatments, your donation can make a significant impact.
This entry aims to shed light on the importance of blood donation, the process involved, and the incredible benefits it brings to individuals and communities.</em></h3>
      <Typography variant="h5" gutterBottom>
        Conditions for Blood Donation:
      </Typography>
      <List  style={{ backgroundColor: "#f8f8f8", padding: "36px",borderRadius:" 4px",margin:"26px"}}>
        <ListItem>
          <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Be at least 18 years old (or according to local regulations)" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Weigh at least 50 kilograms (110 pounds)" />
        </ListItem>
        <ListItem>
          <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Be in good overall health" />
        </ListItem>
        <ListItem>
          <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Have a valid identification document (e.g., driver's license, passport)" />
        </ListItem>
        <ListItem>
          <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have donated blood within the last 56 days" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have received a blood transfusion in the past 12 months" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have traveled to certain countries with high-risk diseases within the last 3 years" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have a history of drug use (intravenous)" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have a history of certain medical conditions (e.g., HIV, hepatitis)" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have engaged in risky sexual behavior within the last 12 months" />
        </ListItem>
      </List>
      <Typography variant="h6" gutterBottom>
        Donate Now
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}style={{margin: "26px",padding:"16px"}}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
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
              variant="outlined"
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
              variant="outlined"
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
              variant="outlined"
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
              variant="outlined"
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="outlined"
              value={formData.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Blood Group</InputLabel>
              <Select value={bloodGroup} onChange={handleBloodGroupChange} label="Blood Group">
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="date"
              name="date"
              label="Date"
              type="date"
              fullWidth
              variant="outlined"
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
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.time}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              fullWidth
              autoComplete="shipping country"
              variant="outlined"
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
                  required
                />
              }
              label="Have you fulfilled the aforementioned requirements?"
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

