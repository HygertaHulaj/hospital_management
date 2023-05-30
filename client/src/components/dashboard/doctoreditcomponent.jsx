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
  Grid,
  Stack,
} from '@mui/material';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export const DoctorsProfileEdit = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    qualifications: '',
    bio: '',
    education: [],
    experience: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    address: '',
    phone: '',
    email: '',
    website: '',
  });
  const { doctor_id } = useParams(); // Extract ID from URL

  useEffect(() => {
    // Fetch doctor's data from API and update the state
    fetch(`http://localhost:8000/doctors/${doctor_id}`) // Use the ID in the API endpoint
      .then((response) => response.json())
      .then((data) => setDoctor(data))
      .catch((error) => console.error('Error:', error));
  }, [doctor_id]); // Depend on ID so the effect runs whenever ID changes

  return (
    <Box width='350px'>
      <Card>
        <CardMedia
          component='img'
          height='240'
          image={doctor.image}
          alt='Doctor Image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {doctor.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {doctor.bio}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Qualifications: {doctor.qualifications}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Education: {doctor.education && doctor.education.length > 0
              ? doctor.education.join(', ')
              : 'N/A'}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Experience: {doctor.experience}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Address: {doctor.address}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Phone: {doctor.phone}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Email: {doctor.email}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Website: {doctor.website}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction='row' spacing={1} marginLeft={4}>
            <Button size='big' startIcon={<FacebookIcon />} href={doctor.facebook} />
            <Button size='big' startIcon={<LinkedInIcon />} href={doctor.linkedin} />
            <Button size='big' startIcon={<InstagramIcon />} href={doctor.instagram} />
            <Button size='big' startIcon={<TwitterIcon />} href={doctor.twitter} />
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
};

export default DoctorsProfileEdit;