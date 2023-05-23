import Topbar from '../components/topbar';
import React, {  useState } from "react";
import ServiceCard from "../components/servicecomponent";
import { Typography, Grid, Tab, Tabs } from "@mui/material";
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
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", margin:"26px",  backgroundColor: "#ADD8E6"}}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={frame402}
              alt="frame402"
              style={{ padding: "85px", width: "100%", marginBottom: -15 }}
            />
            <Typography variant="h6" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Special Service
            </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={frame406}
              alt="frame406"
              style={{ padding: "85px", width: "100%", marginBottom: -15 }}
            />
            <Typography variant="h6" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              24/7 Advanced Care
            </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" ,marginRight:"85px"}}>
            <img
              src={frame403}
              alt="frame403"
              style={{ width: "100%", marginBottom: -15,padding: "85px", }}
            />
            <Typography variant="h6" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Get Result Online
            </Typography>
            
        </Box>
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