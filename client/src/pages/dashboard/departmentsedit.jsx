import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/SideBar';
import { InputAdornment, TextField, Select, MenuItem, FormControl, Button, Grid, Card, Checkbox, ListItemText, CardContent, Typography,InputLabel, CardMedia } from '@material-ui/core';
import { Box } from '@mui/material';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import DepartmentProfileEdit from '../../components/dashboard/departmentsedit'

const DoctorsEdit = () => {


  return (
    <div>
      <DepartmentProfileEdit/>
    </div>
  );
};

export default DoctorsEdit;