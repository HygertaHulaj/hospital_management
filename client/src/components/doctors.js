import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardMedia,
    Grid,
    Stack,
  
  } from '@mui/material'
  import { Link } from 'react-router-dom';

  import FacebookIcon from '@material-ui/icons/Facebook';
  import LinkedInIcon from '@material-ui/icons/LinkedIn';
  import InstagramIcon from '@material-ui/icons/Instagram';
  import TwitterIcon from '@material-ui/icons/Twitter';
  
  
  export const Doctors = (doctors) =>{
  
    return (  
        <Grid item xs={10} md={4}>
          <Box width='350px'>
            <Card>
              <CardMedia
                component='img'
                height='240'
                image='https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg'
                // image={doctors.image}

                alt='unsplash image'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                {doctors.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  React is a JavaScript library for building user interfaces. React
                  can be used as a base in the development of single-page or mobile
                  applications.
                </Typography>
                <Button size='big' align='center'component={Link} to={doctors.readMore}>Read More</Button>
              </CardContent>
              <CardActions >
              <Stack direction="row" spacing={1} marginLeft={4} >
                  <Button size='big' startIcon={<FacebookIcon />} component={Link} to={doctors.facebook}></Button>
                  <Button size='big' startIcon={<LinkedInIcon />} component={Link} to={doctors.linkedin}/>
                  <Button size='big' startIcon={<InstagramIcon />} component={Link} to={doctors.instagram}/>
                  <Button size='big' startIcon={<TwitterIcon />} component={Link} to={doctors.twitter}/>
                </Stack>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      
      
    );
    }  
export default Doctors