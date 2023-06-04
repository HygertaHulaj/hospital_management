import Topbar from '../components/topbar';
import React, { useState } from "react";
import Patientaccess from "../components/patientaccess";
import { Typography, Grid, Tab, Tabs } from "@mui/material";
import { Box } from '@mui/system';

const Patient = () => {
  const [value, setValue] = useState(0);

  const patients = [
    {
      id: 1,
      title: "bloddonation",
      description: "Description of Service 1",
      imageUrl: "/service1.jpg",
    },
    {
      id: 2,
      title: "blooddonationrequest",
      description: "Description of Service 2",
      imageUrl: "/service2.jpg",
    },
    // Add more services as needed
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Topbar name="Our Patient" ></Topbar>
      <Box style={{ backgroundColor: "#f0f0f0", margin: "26px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Grid container spacing={2}>
            {patients.map((patient) => (
              <Grid item key={patient.id} p={6} sx={{ marginTop: "50px" }} >
                <Patientaccess
                  title={patient.title}
                  description={patient.description}
                  imageUrl={patient.imageUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Tabs>
      </Box>
    </div>
  );
}

export default Patient;
