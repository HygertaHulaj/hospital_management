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
import { Link, useNavigate } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export const DoctorsComponent = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch doctors data from API and update the state
    fetch('http://localhost:8000/doctors/') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleReadMore = (doctors_id) => {
    navigate(`/dashboard/doctorsedit/${doctors_id}`);
  };

  return(
    <Grid container spacing={4}>
      {doctors.map((doctor) => (
        <Grid item xs={12} sm={6} md={4} key={doctor.doctor_id}>
              <Box width='100%'>
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
                    <Link to={`/dashboard/doctorsedit/${doctor.doctor_id}`}>
                      <Button size='big' align='center'>
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                  <CardActions>
                    <Stack direction='row' spacing={1} marginLeft={4}>
                      <Button
                        size='big'
                        startIcon={<FacebookIcon />}
                        component={Link}
                        to={doctor.facebook}
                      />
                      <Button
                        size='big'
                        startIcon={<LinkedInIcon />}
                        component={Link}
                        to={doctor.linkedin}
                      />
                      <Button
                        size='big'
                        startIcon={<InstagramIcon />}
                        component={Link}
                        to={doctor.instagram}
                      />
                      <Button
                        size='big'
                        startIcon={<TwitterIcon />}
                        component={Link}
                        to={doctor.twitter}
                      />
                    </Stack>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      );
    };


export default DoctorsComponent;