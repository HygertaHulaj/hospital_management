import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: '0 auto',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const DepartmentPage = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [headDoctor, setHeadDoctor] = useState('');
  const [hospitalId, setHospitalId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      description,
      head_doctor: headDoctor,
      hospital_id: hospitalId,
    };
    fetch('http://localhost:8000/departments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Department created successfully');
          // Reset the form fields
          setName('');
          setDescription('');
          setHeadDoctor('');
          setHospitalId('');
        } else {
          console.error('Failed to create department');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <TextField
        label="Head Doctor"
        value={headDoctor}
        onChange={(e) => setHeadDoctor(e.target.value)}
        required
      />
      <TextField
        label="Hospital ID"
        value={hospitalId}
        onChange={(e) => setHospitalId(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Create Department
      </Button>
    </form>
  );
};

export default DepartmentPage;
