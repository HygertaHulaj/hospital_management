import React, {  useState } from "react";
import { Typography, Grid, Tab, Tabs, Button } from "@mui/material";
import { Box, margin } from '@mui/system';


const ServiceGetStarted = ({ title ,icone}) => {

    return (
        <Box sx={{ display: "flex", alignItems: "center",marginRight:"16px" }}>
            <img
              src={icone}
              alt="frame402"
              style={{ padding: "85px", width: "100%"}}

            />
            <Typography variant="h6" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {/* Special Service */}
              {title}
            </Typography>
        </Box>
    );
  };
  
  export default ServiceGetStarted;
  