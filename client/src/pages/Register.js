import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Navbar from "../Navbar"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Register = () => {
  const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const marginTop = { marginTop: 5 };
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    gender: '',
    date_of_birth: '',
    address: '',
    contact_details: '',
    password: '',
    // terms_accepted: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make a POST request to the FastAPI endpoint
    fetch('http://localhost:8000/patients/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          console.log('Registration successful');
          // Reset the form data if needed
          setFormData({
            name: '',
            surname: '',
            email: '',
            gender: '',
            date_of_birth: '',
            address: '',
            contact_details: '',
            password: '',
            // terms_accepted: false
          });
        } else {
          // console.error('Registration failed');
          response.json().then(data => {
            // check if error message is 'Email already exists'
            if (data.detail === 'Email already exists') {
              setError('Email already exists');
            }
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Grid>
      <Navbar />
      <Paper style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
        </Grid>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}></form>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label='Name'
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label='Surname'
            placeholder='Enter your surname'
            name='surname'
            value={formData.surname}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label='Email'
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {/* <FormControl component='fieldset' style={marginTop}>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup
              aria-label='gender'
              name='gender'
              style={{ display: 'initial' }}
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value='female' control={<Radio />} label='Female' />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
            </RadioGroup>
          </FormControl> */}
              <TextField
            fullWidth
            label='gender'
            placeholder='Enter your gender'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label='Date of Birth'
            placeholder='Enter your birthdate'
            name='date_of_birth' // Updated attribute value
            value={formData.date_of_birth}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label='Address'
            placeholder='Enter your address'
            name='address'
            value={formData.address}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label='Phone Number'
            placeholder='Enter your phone number'
            name='phone_number'
            value={formData.contact_details}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label='Password'
            placeholder='Enter your password'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          {/* <FormControlLabel
            control={<Checkbox name='terms_accepted' checked={formData.terms_accepted} onChange={handleCheckboxChange} />}
            label='I accept the terms and conditions.'
          /> */}
          <Button type='submit' variant='contained' color='primary'>Register</Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;