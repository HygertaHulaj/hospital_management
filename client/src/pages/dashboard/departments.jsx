import React, { useEffect, useState } from 'react';
import { Grid, Box, Link, Button } from '@mui/material';
import Sidebar from '../../components/dashboard/SideBar';
import DepartmentsAdd from './DepartmentsAdd';
import DepartmentsComponent from '../../components/dashboard/DepartmentsComponent';

function DepartmentsProfile() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/departments/')
      .then(response => response.json())
      .then(data => setDepartments(data))
      .catch(error => console.error(error));
  }, []);

  // Filter out duplicate departments by department ID
  const filteredDepartments = departments.filter((department, index, self) =>
    index === self.findIndex(d => d.departments_id === department.departments_id)
  );

  return (
    <Sidebar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Link href="../dashboard/DepartmentsAdd">
              <Button variant="contained" color="primary">
                Add A Department
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid container spacing={3}>
          {filteredDepartments.map((department, index) => (
            <Grid item key={department.departments_id}>
              <DepartmentsComponent department={department} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Sidebar>
  );
}

export default DepartmentsProfile;
