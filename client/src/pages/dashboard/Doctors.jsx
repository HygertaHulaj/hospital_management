import React, { useEffect, useState } from 'react';
import {Grid,Box,Link,Button } from '@mui/material';
import Sidebar from '../../components/dashboard/SideBar';
import DoctorsProfileAdd from './DoctorsProfileAdd';
const DoctorsProfile = () => {
    return(
<Sidebar>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end">
          <Link href="../dashboard/DoctorsProfileAdd"><Button variant="contained" color="primary">
            Add A Doctor
          </Button>
          </Link>
        </Box>
      </Grid>
      {/* Rest of your dashboard components */}
    </Grid>
    </Sidebar>)
    
};

export default DoctorsProfile;
