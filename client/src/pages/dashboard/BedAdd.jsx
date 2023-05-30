import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

const BedAdd = () => {
  const [bedInfo, setBedInfo] = useState({
    ward_id: '',
    patient_id: '',
    availability: '',
    bed_condition: '',
    bed_assigning_datetime: '',
    discharge_datetime: '',
    additional_notes: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBedInfo((prevBedInfo) => ({
      ...prevBedInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { ...bedInfo };
    fetch('http://localhost:8000/beds/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Bed added successfully');
          // Reset the form
          setBedInfo({
            ward_id: '',
            patient_id: '',
            availability: '',
            bed_condition: '',
            bed_assigning_datetime: '',
            discharge_datetime: '',
            additional_notes: '',
          });
        } else {
          console.error('Error adding bed');
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
                        Add Bed
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            name="ward_id"
                            label="Ward ID"
                            variant="outlined"
                            fullWidth
                            value={bedInfo.ward_id}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            name="patient_id"
                            label="Patient ID"
                            variant="outlined"
                            fullWidth
                            value={bedInfo.patient_id}
                            onChange={handleInputChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            name="availability"
                            label="Availability"
                            variant="outlined"
                            fullWidth
                            value={bedInfo.availability}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            name="bed_condition"
                            label="Bed Condition"
                            variant="outlined"
                            fullWidth
                            value={bedInfo.bed_condition}
                            onChange={handleInputChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            name="bed_assigning_datetime"
                            label="Bed Assigning Date"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={bedInfo.bed_assigning_datetime}
                            onChange={handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            name="discharge_datetime"
                            label="Discharge Date"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={bedInfo.discharge_datetime}
                            onChange={handleInputChange}
                          />
                        </Grid>
                      </Grid>
                      <TextField
                        name="additional_notes"
                        label="Additional Notes"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={bedInfo.additional_notes}
                        onChange={handleInputChange}
                        style={{ marginTop: '20px' }}
                      />
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

export default BedAdd;