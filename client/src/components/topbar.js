import {
    Box,
    Typography,
  } from '@mui/material'
  
  
  export const Topbar = (topbar) =>{
  
    return ( 
        <Typography variant="h1" align="center" gutterBottom>
      <Box
  component="span"
  sx={{
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: '100%',
    color: 'black',
    display: 'inline-block',
    p: 20,
    height: 380,
    width: 1340,
  }}
>
{topbar.name}
</Box>
</Typography> 
    );
}  
export default Topbar
  
