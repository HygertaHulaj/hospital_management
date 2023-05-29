import React, { useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export const DoctorsComponent = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors data from API and update the state
    fetch('http://localhost:8000/doctors/') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <>
      {doctors.map((doctor) => (
        <Grid item xs={10} md={4} key={doctor.id}>
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
                <Button size='big' align='center' component={Link} to={doctor.readMore}>
                  Read More
                </Button>
              </CardContent>
              <CardActions>
                <Stack direction='row' spacing={1} marginLeft={4}>
                  <Button size='big' startIcon={<FacebookIcon />} component={Link} to={doctor.facebook} />
                  <Button size='big' startIcon={<LinkedInIcon />} component={Link} to={doctor.linkedin} />
                  <Button size='big' startIcon={<InstagramIcon />} component={Link} to={doctor.instagram} />
                  <Button size='big' startIcon={<TwitterIcon />} component={Link} to={doctor.twitter} />
                </Stack>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default DoctorsComponent;
