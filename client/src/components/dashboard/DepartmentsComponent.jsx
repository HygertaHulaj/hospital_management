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

const DepartmentsComponent = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch departments data from API and update the state
    fetch('http://localhost:8000/departments/') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setDepartments(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleReadMore = (department_id) => {
    navigate(`/dashboard/departmentsedit/${department_id}`);
  };

  return (
    <Grid container spacing={4}>
      {departments.map((department) => (
        <Grid item xs={12} sm={6} md={4} key={department.department_id}>
          <Box width="350px">
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {department.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {department.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Head Doctor: {department.head_doctor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hospital ID: {department.hospital_id}
                </Typography>
                <Link to={`/dashboard/departmentsedit/${department.department_id}`}>
                  <Button size="big" align="center">
                    Read More
                  </Button>
                </Link>
              </CardContent>
              <CardActions>
 
 
              </CardActions>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default DepartmentsComponent;