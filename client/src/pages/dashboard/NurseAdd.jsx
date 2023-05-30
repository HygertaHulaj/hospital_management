import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@material-ui/core';

const NurseAdd = () => {
  const [nurseInfo, setNurseInfo] = useState({
    name: '',
    surname: '',
    email: '',
    department: '',
    contact_details: '',
    department_id: '',
    hospital_id: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNurseInfo((prevNurseInfo) => ({
      ...prevNurseInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { ...nurseInfo };
    fetch('http://localhost:8000/nurses/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Nurse added successfully');
          // Reset the form
          setNurseInfo({
            name: '',
            surname: '',
            email: '',
            department: '',
            contact_details: '',
            department_id: '',
            hospital_id: '',
          });
        } else {
          console.error('Error adding nurse');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="content" style={{ padding: '20px' }}>
          <div className="container-fluid">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h4" component="div">
                      Add Nurse
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="name"
                          label="Name"
                          variant="outlined"
                          fullWidth
                          value={nurseInfo.name}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="surname"
                          label="Surname"
                          variant="outlined"
                          fullWidth
                          value={nurseInfo.surname}
                          onChange={handleInputChange}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="email"
                          label="Email"
                          variant="outlined"
                          fullWidth
                          value={nurseInfo.email}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="department"
                          label="Department"
                          variant="outlined"
                          fullWidth
                          value={nurseInfo.department}
                          onChange={handleInputChange}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="contact_details"
                          label="Contact Details"
                          variant="outlined"
                          fullWidth
                          value={nurseInfo.contact_details}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="department_id"
                          label="Department ID"
                          variant="outlined"
                          fullWidth
                          value={nurseInfo.department_id}
                          onChange={handleInputChange}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="hospital_id"
                          label="Hospital ID"
                          variant="outlined"
                          fullWidth
                          value={nurseInfo.hospital_id}
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
    </div>
  );
};

export default NurseAdd;