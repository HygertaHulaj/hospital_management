import Topbar from '../components/topbar';
import React, {  useState } from "react";
import ServiceCard from "../components/servicecomponent";
import { Typography, Grid, Tab, Tabs } from "@mui/material";
import { Box } from '@mui/system';


const Service = () => {

  const [value, setValue] = useState(0);

  
  const service = [
    {
      id: 1,
      title: "Service 1",
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
    <div className="h-screen" >
      <Box style={{ backgroundColor: "#f0f0f0" }}>      
      <Topbar name="Our Services"></Topbar>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
      {service.map((service) => (
          <Grid container spacing={2}>
            <Grid item key={service.id} p={6}  >
              <ServiceCard
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            </Grid>
          </Grid>
        ))}
      </Tabs>
      </Box>
      </div>
    );
  };
  
  export default Service; 