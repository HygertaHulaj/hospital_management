import Topbar from '../components/topbar';
import React, {  useState } from "react";
import ServiceCard from "../components/servicecomponent";
import Ourservice from "../components/ourservice";
import ServiceGetStarted from "../components/serviceGetStarted";
import { Typography, Grid, Tab, Tabs, Button } from "@mui/material";
import { Box, margin } from '@mui/system';
import frame402 from '../assets/Frame 402.png'
import frame403 from '../assets/Frame 403.png'
import frame406 from '../assets/Frame 406.png'

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
           
      <Topbar name="Our Services"></Topbar>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", margin:"56px",  backgroundColor: "#ADD8E6"}}>
        <ServiceGetStarted title="Special Service" icone={frame402} ></ServiceGetStarted>
        <ServiceGetStarted title="24/7 Advanced Care" icone={frame406} ></ServiceGetStarted>
        <ServiceGetStarted title="Get Result Online" icone={frame403} ></ServiceGetStarted>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin:"36px"}}>
        <Ourservice title="Qualified Doctors"></Ourservice>
        <Ourservice title="Emergency Helicopter"></Ourservice>
        <Ourservice title="Leading Technology"></Ourservice>
      </Box>

      <Box style={{ backgroundColor: "#f0f0f0",margin:"26px"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
      {service.map((service) => (
          <Grid container spacing={2}>
            <Grid item key={service.id} p={6} sx={{ marginTop: "50px" }} >
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