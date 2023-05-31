import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@material-ui/core';

const DoctorsProfileAdd = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    qualifications: '',
    bio: '',
    specialty: [],
    education: [],
    experience: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'specialty') {
      const specialties = value.split(',').map((specialty) => specialty.trim());
      setDoctorInfo((prevDoctorInfo) => ({
        ...prevDoctorInfo,
        [name]: specialties,
      }));
    } else {
      setDoctorInfo((prevDoctorInfo) => ({
        ...prevDoctorInfo,
        [name]: value,
      }));
    }
  };

  const handleEducationChange = (index, value) => {
    const education = [...doctorInfo.education];
    education[index] = value;
    setDoctorInfo((prevDoctorInfo) => ({
      ...prevDoctorInfo,
      education: education,
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
            specialty: [],
            education: [],
            experience: '',
            address: '',
            phone: '',
            email: '',
            website: '',
            facebook: '',
            instagram: '',
            linkedin: '',
            twitter: '',
          });
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
                        <Grid item xs={12}>
                          <TextField
                            name="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.name}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="qualifications"
                            label="Qualifications"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.qualifications}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="specialty"
                            label="Specialty"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.specialty.join(', ')}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h6" component="div">
                            Education
                          </Typography>
                          {doctorInfo.education.map((education, index) => (
                            <TextField
                              key={index}
                              label={`Education ${index + 1}`}
                              variant="outlined"
                              fullWidth
                              value={education}
                              onChange={(event) => handleEducationChange(index, event.target.value)}
                            />
                          ))}
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() =>
                              setDoctorInfo((prevDoctorInfo) => ({
                                ...prevDoctorInfo,
                                education: [...prevDoctorInfo.education, ''],
                              }))
                            }
                          >
                            Add Education
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="experience"
                            label="Experience"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.experience}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="address"
                            label="Address"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.address}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="phone"
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.phone}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.email}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="website"
                            label="Website"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.website}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="facebook"
                            label="Facebook"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.facebook}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="instagram"
                            label="Instagram"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.instagram}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="linkedin"
                            label="LinkedIn"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.linkedin}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="twitter"
                            label="Twitter"
                            variant="outlined"
                            fullWidth
                            value={doctorInfo.twitter}
                            onChange={handleInputChange}
                          />
                        </Grid>
                      </Grid>
                      <Button type="submit" variant="contained" color="primary">
                        Add Profile
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
