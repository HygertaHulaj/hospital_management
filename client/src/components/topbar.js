import React from 'react';
import { Box, Typography } from '@mui/material';
import background from '../assets/4.jpg';

export const Topbar = (topbar) =>{
  return (
    <Typography variant="h1" align="center" gutterBottom>
      <Box
        component="span"
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: '100%',
          color: 'black',
          display: 'inline-block',
          padding: 20,
          height: 380,
          width: 1340,
        }}
      >
        {topbar.name}
      </Box>
    </Typography>
  );
};

export default Topbar;
