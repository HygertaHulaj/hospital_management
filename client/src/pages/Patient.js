import Topbar from '../components/topbar';
import React, {  useState } from "react";
import Patientaccess from "../components/patientaccess";
import { Typography, Grid, Tab, Tabs} from "@mui/material";
import { Box, margin } from '@mui/system';

const Patient = () => {
  const [value, setValue] = useState(0);

  
  const patient = [
    {
      id: 1,
      title: "bloddonation",
      description: "Description of Service 1",
      imageUrl: "/service1.jpg",
    },
    {
      id: 2,
      title: "Service 2",
      description: "Description of Service 2",
      imageUrl: "/service2.jpg",
    },
    {
      id: 3,
      title: "Service 3",
      description: "Description of Service 3",
      imageUrl: "/service3.jpg",
    },
    {
      id: 4,
      title: "Service 4",
      description: "Description of Service 4",
      imageUrl: "/service4.jpg",
    },
    {
      id: 5,
      title: "Service 5",
      description: "Description of Service 5",
      imageUrl: "/service5.jpg",
    },
    {
      id: 6,
      title: "Service 6",
      description: "Description of Service 6",
      imageUrl: "/service6.jpg",
    },
    // Add more services as needed
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Topbar name="Our Patient" ></Topbar>
      <Box style={{ backgroundColor: "#f0f0f0",margin:"26px"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
      {patient.map((patient) => (
          <Grid container spacing={2}>
            <Grid item key={patient.id} p={6} sx={{ marginTop: "50px" }} >
              <Patientaccess
                title={patient.title}
                description={patient.description}
                imageUrl={patient.imageUrl}
              />
            </Grid>
          </Grid>
        ))}
      </Tabs>

      </Box>
      </div>
  );
}
export default Patient; 