import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@material-ui/core';

const HospitalsAdd = () => {
  const [hospitalInfo, setHospitalInfo] = useState({
    name: '',
    location: '',
    capacity: '',
    emergency_services: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHospitalInfo((prevHospitalInfo) => ({
      ...prevHospitalInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { ...hospitalInfo };
    fetch('http://localhost:8000/hospitals/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Hospital added successfully');
          // Reset the form
          setHospitalInfo({
            name: '',
            location: '',
            capacity: '',
            emergency_services: false,
          });
        } else {
          console.error('Error adding hospital');
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
                        Add Hospital
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            name="name"
                            label="Hospital Name"
                            variant="outlined"
                            fullWidth
                            value={hospitalInfo.name}
                            onChange={handleInputChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            name="location"
                            label="Location"
                            variant="outlined"
                            fullWidth
                            value={hospitalInfo.location}
                            onChange={handleInputChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            name="capacity"
                            label="Capacity"
                            variant="outlined"
                            fullWidth
                            value={hospitalInfo.capacity}
                            onChange={handleInputChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            name="emergency_services"
                            label="Emergency Services"
                            variant="outlined"
                            fullWidth
                            value={hospitalInfo.emergency_services}
                            onChange={handleInputChange}
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

export default HospitalsAdd;