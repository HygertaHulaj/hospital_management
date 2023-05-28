import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';
import { InputAdornment, TextField, Select, MenuItem, FormControl, Button, Grid, Card, Checkbox, ListItemText, CardContent, Typography,InputLabel, CardMedia } from '@material-ui/core';
import { Box } from '@mui/material';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';

const DoctorsProfileAdd = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    qualifications: '',
    bio: '',
    experience: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    specialty: [],
    education: [],
    social: {
      facebook: '',
      linkedin: '',
      instagram: '',
      twitter: '',
    },
    contact: {
      address: '',
      phone: '',
      email: '',
      website: '',
    },
  });
  const [imageSrc, setImageSrc] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDoctorInfo((prevDoctorInfo) => ({
      ...prevDoctorInfo,
      [name]: value,
    }));
  };

  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    const education = [...doctorInfo.education];
    education[name] = value;
    setDoctorInfo((prevDoctorInfo) => ({
      ...prevDoctorInfo,
      education: education,
    }));
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setDoctorInfo((prevDoctorInfo) => ({
      ...prevDoctorInfo,
      contact: {
        ...prevDoctorInfo.contact,
        [name]: value,
      },
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImageSrc(url);
  };

  const handleSocialChange = (event) => {
    const { name, value } = event.target;
    setDoctorInfo((prevDoctorInfo) => ({
      ...prevDoctorInfo,
      social: {
        ...prevDoctorInfo.social,
        [name]: value,
      },
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { ...doctorInfo };
    fetch('http://localhost:8000/doctors/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Doctor profile added successfully');
          // Reset the form
          setDoctorInfo({
            name: '',
            qualifications: '',
            bio: '',
            experience: '',
            address: '',
            phone: '',
            email: '',
            website: '',
            facebook: '',
            instagram: '',
            linkedin: '',
            twitter: '',
            specialty: [],
            education: [],
            social: {
              facebook: '',
              linkedin: '',
              instagram: '',
              twitter: '',
            },
            contact: {
              address: '',
              phone: '',
              email: '',
              website: '',
            },
          });
          setImageSrc('');
        } else {
          console.error('Error adding doctor profile');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Sidebar>
        <form onSubmit={handleSubmit}>
          <div className="content" style={{ padding: '20px' }}>
            <div className="container-fluid">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h4" component="div">
                        Add Doctor Profile
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.name}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="qualifications"
                            label="Qualifications"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.qualifications}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="experience"
                            label="Experience"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.experience}
                            onChange={handleInputChange}
                          />
                        </Grid>
                      </Grid>
                      <TextField
                        name="bio"
                        label="Bio"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={doctorInfo.bio}
                        onChange={handleInputChange}
                      />
                      <TextField
                        name="specialty"
                        label="Specialty"
                        variant="outlined"
                        fullWidth
                        value={doctorInfo.specialty}
                        onChange={handleInputChange}
                        style={{ marginTop: '20px' }}
                      />
                      <Typography variant="h6" component="div" style={{ marginTop: '20px' }}>
                        Education
                      </Typography>
                      {doctorInfo.education.map((education, index) => (
                        <TextField
                          key={index}
                          name={index.toString()}
                          label={`Education ${index + 1}`}
                          variant="outlined"
                          fullWidth
                          value={education}
                          onChange={handleEducationChange}
                          style={{ marginTop: '10px' }}
                        />
                      ))}
                      <Button
                        variant="outlined"
                        onClick={() =>
                          setDoctorInfo((prevDoctorInfo) => ({
                            ...prevDoctorInfo,
                            education: [...prevDoctorInfo.education, ''],
                          }))
                        }
                        style={{ marginTop: '10px' }}
                      >
                        Add Education
                      </Button>
                      <Typography variant="h6" component="div" style={{ marginTop: '20px' }}>
                        Contact Information
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="address"
                            label="Address"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.contact.address}
                            onChange={handleContactChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="phone"
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.contact.phone}
                            onChange={handleContactChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.contact.email}
                            onChange={handleContactChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="website"
                            label="Website"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.contact.website}
                            onChange={handleContactChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="facebook"
                            label="Facebook"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.social.facebook}
                            onChange={handleSocialChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="linkedin"
                            label="LinkedIn"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.social.linkedin}
                            onChange={handleSocialChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="instagram"
                            label="Instagram"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.social.instagram}
                            onChange={handleSocialChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="twitter"
                            label="Twitter"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.social.twitter}
                            onChange={handleSocialChange}
                          />
                        </Grid>
                      </Grid>
                      <Button type="submit" variant="contained" style={{ marginTop: '20px' }}>
                        Submit
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </form>
      </Sidebar>
    </div>
  );
};

export default DoctorsProfileAdd;
