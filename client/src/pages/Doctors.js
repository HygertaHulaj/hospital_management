import { useState, useEffect } from 'react';
import Doctors from '../components/doctors';
import {
  Box,
  Typography,
  Grid,
  Button,
} from '@mui/material';

function MyDoctors() {
  const [specialty, setSpecialty] = useState('all');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/api/doctors')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error(error));
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    specialty === 'all' || doctor.specialty === specialty
  );

  return (
    <div>
      <Typography variant="h1" align="center" gutterBottom>
        <Box
          component="span"
          sx={{
            backgroundImage: 'url(https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg)',
            backgroundSize: '100%',
            color: 'black',
            display: 'inline-block',
            p: 20,
            height: 380,
            width: 1340,
          }}
        >
          Our Doctors
        </Box>
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button onClick={() => setSpecialty('all')}>All Doctors</Button>
        <Button onClick={() => setSpecialty('oncology')}>Oncology</Button>
        <Button onClick={() => setSpecialty('cardiology')}>Cardiology</Button>
        <Button onClick={() => setSpecialty('neurology')}>Neurology</Button>
      </Box>
      <Grid container spacing={5} padding={18}>
        <Grid item container spacing={5} xs={12}>
          {filteredDoctors.map((doctor) => (
            <Grid item xs={4} key={doctor.id}>
              <Doctors
                name={doctor.name}
                facebook={doctor.facebook}
                instagram={doctor.instagram}
                linkedin={doctor.linkedin}
                twitter={doctor.twitter}
                readMore={doctor.readMore}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default MyDoctors;
