import { useState, useEffect } from 'react';
import Doctors from '../components/doctors';
import Topbar from '../components/topbar';
import Navbar from "../Navbar"
import {
  Box,
  Grid,
  Button,
} from '@mui/material';

function MyDoctors() {
  const [specialty, setSpecialty] = useState('all');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/doctors/')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error(error));
  }, []);

  const filteredDoctors = Array.from(new Set(doctors.filter(doctor =>
    (specialty === 'all' || doctor.specialty === specialty)
  ).map(doctor => doctor.id))).slice(0, 3).map(doctorId => doctors.find(doctor => doctor.id === doctorId));

  return (
    <div>
      <Navbar />
      <Topbar name="Our Doctors"></Topbar>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button onClick={() => setSpecialty('all')}>All Doctors</Button>
        <Button onClick={() => setSpecialty('oncology')}>Oncology</Button>
        <Button onClick={() => setSpecialty('cardiology')}>Cardiology</Button>
        <Button onClick={() => setSpecialty('neurology')}>Neurology</Button>
      </Box>
      <Grid container spacing={5} padding={18}>
        <Grid item container spacing={5} xs={12}>
          {filteredDoctors.map((doctor) => (
            <Grid item  key={doctor.id}>
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