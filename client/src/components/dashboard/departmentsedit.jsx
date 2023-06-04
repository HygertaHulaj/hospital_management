import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
  TextField,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './SideBar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  card: {
    maxWidth: 500,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  content: {
    textAlign: 'left',
    padding: theme.spacing(3),
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
  button: {
    color: 'white',
    backgroundColor: 'purple',
    '&:hover': {
      backgroundColor: 'darkviolet',
    },
  },
}));

export const DepartmentProfileEdit = () => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
//   const [editDepartment, setEditDepartment] = useState({});
  const { department_id } = useParams(); // Extract ID from URL
  const [editDepartment, setEditDepartment] = useState({
    name: '',
    description: '',
    head_doctor: '',
    hospital_id: '',
  });
  useEffect(() => {
    // Fetch department's data from API and update the state
    fetch(`http://localhost:8000/departments/${department_id}`) // Use the ID in the API endpoint
      .then((response) => response.json())
      .then((data) => setEditDepartment(data))
      .catch((error) => console.error('Error:', error));
  }, [department_id]); // Depend on ID so the effect runs whenever ID changes

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send updated department data to the API
    fetch(`http://localhost:8000/departments/${department_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editDepartment),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Department profile updated successfully');
          setEditMode(false);
        } else {
          console.error('Error updating department profile');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditDepartment((prevDepartment) => ({
      ...prevDepartment,
      [name]: value,
    }));
  };

  if (editMode) {
    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField name='name' value={editDepartment.name} onChange={handleChange} label="Name" variant="outlined" />
        <TextField name='description' value={editDepartment.description} onChange={handleChange} label="Description" variant="outlined" />
        <TextField name='head_doctor' value={editDepartment.head_doctor} onChange={handleChange} label="Head Doctor" variant="outlined" />
        <TextField name='hospital_id' value={editDepartment.hospital_id} onChange={handleChange} label="Hospital ID" variant="outlined" />
        <Button type='submit' className={classes.button}>Update</Button>
      </form>
    );
  } else {
    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="h6" className={classes.heading}>Name</Typography>
          <Typography variant="body1" className={classes.subheading}>{editDepartment.name}</Typography>
          <Typography variant="h6" className={classes.heading}>Description</Typography>
          <Typography variant="body1" className={classes.subheading}>{editDepartment.description}</Typography>
          <Typography variant="h6" className={classes.heading}>Head Doctor</Typography>
          <Typography variant="body1" className={classes.subheading}>{editDepartment.head_doctor}</Typography>
          <Typography variant="h6" className={classes.heading}>Hospital ID</Typography>
          <Typography variant="body1" className={classes.subheading}>{editDepartment.hospital_id}</Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button} onClick={handleEdit}>Edit</Button>
        </CardActions>
      </Card>
    );
  }
};

export default DepartmentProfileEdit;