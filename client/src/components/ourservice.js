import React, {  useState } from "react";
import { Typography, Grid, Tab, Tabs, Button } from "@mui/material";
import { Box, margin } from '@mui/system';

import vector2 from '../assets/Vector2.png'


const Ourservice = ({ title }) => {

    return (
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "800px",
              height:"350px",
              border: "1px dashed #999",
              margin:"20px"
            }}
          >
            <img src={vector2} alt="headerImg" style={{ width: "100%", marginBottom: -15 }} />
    
            
            <Typography variant="body1">{title}s</Typography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <Button variant="contained" color="primary" size="small" style={{ marginTop: 10,marginBottom:"15px" }}>
              Read More
            </Button>
          </Box>
    );
  };
  
  export default Ourservice;
  