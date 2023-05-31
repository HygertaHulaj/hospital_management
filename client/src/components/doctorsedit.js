import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
  Stack,
  TextField,
} from '@mui/material';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

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
  media: {
    paddingTop: '56.25%',
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

export const DoctorProfileEdit = () => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  const [editDoctor, setEditDoctor] = useState({});
  const { doctor_id } = useParams(); // Extract ID from URL

  useEffect(() => {
    // Fetch doctor's data from API and update the state
    fetch(`http://localhost:8000/doctors/${doctor_id}`) // Use the ID in the API endpoint
      .then((response) => response.json())
      .then((data) => setEditDoctor(data))
      .catch((error) => console.error('Error:', error));
  }, [doctor_id]); // Depend on ID so the effect runs whenever ID changes

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send updated doctor data to the API
    fetch(`http://localhost:8000/doctors/${doctor_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editDoctor),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Doctor profile updated successfully');
          setEditMode(false);
        } else {
          console.error('Error updating doctor profile');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  return (

      
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={editDoctor.image} />
      <CardContent className={classes.content}>
        <Typography variant="h6" className={classes.heading}>Name</Typography>
        <Typography variant="body1" className={classes.subheading}>{editDoctor.name}</Typography>
        <Typography variant="h6" className={classes.heading}>Qualifications</Typography>
        <Typography variant="body1" className={classes.subheading}>{editDoctor.qualifications}</Typography>
        <Typography variant="h6" className={classes.heading}>Bio</Typography>
        <Typography variant="body1" className={classes.subheading}>{editDoctor.bio}</Typography>
        <Typography variant="h6" className={classes.heading}>Experience</Typography>
        <Typography variant="body1" className={classes.subheading}>{editDoctor.experience}</Typography>
        <Typography variant="h6" className={classes.heading}>Address</Typography>
        <Typography variant="body1" className={classes.subheading}>{editDoctor.address}</Typography>
        <Typography variant="h6" className={classes.heading}>Phone</Typography>
        <Typography variant="body1" className={classes.subheading}>{editDoctor.phone}</Typography>
        <Typography variant="h6" className={classes.heading}>Email</Typography>
        <Typography variant="body1" className={classes.subheading}>{editDoctor.email}</Typography>
        <Typography variant="h6" className={classes.heading}>Website</Typography>
        <Typography variant="body1" className={classes.subheading}>{editDoctor.website}</Typography>
      </CardContent>
      <CardActions>
        <Stack direction='row' spacing={1} marginLeft={4}>
          <Button size='big' startIcon={<FacebookIcon />} href={editDoctor.facebook} />
          <Button size='big' startIcon={<LinkedInIcon />} href={editDoctor.linkedin} />
          <Button size='big' startIcon={<InstagramIcon />} href={editDoctor.instagram} />
          <Button size='big' startIcon={<TwitterIcon />} href={editDoctor.twitter} />
        </Stack>
      </CardActions>
    </Card>
  );
  } 
  

export default DoctorProfileEdit;
