import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@material-ui/core';

const SurgeryAdd = () => {
  const [surgeryInfo, setSurgeryInfo] = useState({
    surgery_type: '',
    date: '',
    patient_id: '',
    doctor_id: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSurgeryInfo((prevSurgeryInfo) => ({
      ...prevSurgeryInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { ...surgeryInfo };
    fetch('http://localhost:8000/surgeries/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Surgery added successfully');
          // Reset the form
          setSurgeryInfo({
            surgery_type: '',
            date: '',
            patient_id: '',
            doctor_id: '',
          });
        } else {
          console.error('Error adding surgery');
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
                        Add Surgery
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            name="surgery_type"
                            label="Surgery Type"
                            variant="outlined"
                            fullWidth
                            value={surgeryInfo.surgery_type}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            name="date"
                            label="Date"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={surgeryInfo.date}
                            onChange={handleInputChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            name="patient_id"
                            label="Patient ID"
                            variant="outlined"
                            fullWidth
                            value={surgeryInfo.patient_id}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            name="doctor_id"
                            label="Doctor ID"
                            variant="outlined"
                            fullWidth
                            value={surgeryInfo.doctor_id}
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

export default SurgeryAdd;