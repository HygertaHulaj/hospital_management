import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const DepartmentPage = () => {
  const [formData, setFormData] = useState({
    request_date: '',
    blood_type: '',
    contact_information: '',
    request_status: '',
    requested_units: 0,
    urgency_level: '',
    request_notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend API
    fetch('http://localhost:8000/blood_requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data successfully submitted:', data);
        // Reset the form
        setFormData({
          request_date: '',
          blood_type: '',
          contact_information: '',
          request_status: '',
          requested_units: 0,
          urgency_level: '',
          request_notes: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="request_date"
        label="Request Date"
        value={formData.request_date}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="blood_type"
        label="Blood Type"
        value={formData.blood_type}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="contact_information"
        label="Contact Information"
        value={formData.contact_information}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="request_status"
        label="Request Status"
        value={formData.request_status}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="requested_units"
        label="Requested Units"
        type="number"
        value={formData.requested_units}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="urgency_level"
        label="Urgency Level"
        value={formData.urgency_level}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="request_notes"
        label="Request Notes"
        value={formData.request_notes}
        onChange={handleChange}
        fullWidth
        required
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default DepartmentPage;