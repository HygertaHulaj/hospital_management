import React, { useEffect, useState } from 'react';
import { Grid, Box, Link, Button } from '@mui/material';
import Sidebar from '../../components/dashboard/SideBar';
import DoctorsProfileAdd from './DoctorsProfileAdd';
import DoctorsComponent from '../../components/dashboard/doctorscomponent';

function DoctorsProfile() {
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
    <Sidebar>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Link href="../dashboard/DoctorsProfileAdd">
              <Button variant="contained" color="primary">
                Add A Doctor
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
          <Button onClick={() => setSpecialty('all')}>All Doctors</Button>
          <Button onClick={() => setSpecialty('oncology')}>Oncology</Button>
          <Button onClick={() => setSpecialty('cardiology')}>Cardiology</Button>
          <Button onClick={() => setSpecialty('neurology')}>Neurology</Button>
        </Grid>
        <Grid container p={6}>
          {filteredDoctors.map((doctor, index) => (
            <Grid item xs={4} key={doctor.id}>
              <DoctorsComponent doctor={doctor} />
            </Grid>
          ))}
          {filteredDoctors.length % 3 !== 0 && (
            <Grid item xs={12} md={4 * (3 - (filteredDoctors.length % 3))} />
          )}
        </Grid>
      </Grid>
    </Sidebar>
  );
}

export default DoctorsProfile;
