import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({

  heroImage: {
    width: '100%',
    height: 'auto',
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  card: {
    display: 'flex',
  },
  cardContent: {
    flex: '1 0 auto',
  },
  cardMedia: {
    width: 300,
    height: 200,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const ServiceDetails = () => {
  const classes = useStyles();

  return (
    <div>

      <Container>
        <Grid container spacing={4} className={classes.container}>
          <Grid item xs={12} md={6}>
            <img src="https://via.placeholder.com/600x400" alt="Service Image" className={classes.heroImage} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Service Title
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, nisi a dictum ultrices,
              risus nunc dapibus leo, a facilisis ex nulla eu tortor.
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, nisi a dictum ultrices, risus
              nunc dapibus leo, a facilisis ex nulla eu tortor. Curabitur bibendum quam sed venenatis pulvinar.
            </Typography>
            <Typography variant="body1">
              Nullam dignissim cursus odio, sed egestas est sagittis nec. Morbi vel purus lorem. Donec sed ultricies
              justo. In eu ex non metus interdum aliquet at eget risus. Morbi feugiat eu odio in lacinia.
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
              Contact Us
            </Button>
         
            </Grid>
        </Grid>
      </Container>

      <footer className={classes.footer}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, nisi a dictum ultrices,
                risus nunc dapibus leo, a facilisis ex nulla eu tortor.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Services
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2">Service 1</Typography>
                </li>
                <li>
                  <Typography variant="body2">Service 2</Typography>
                </li>
                <li>
                  <Typography variant="body2">Service 3</Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2">
                1234 Street Name, City<br />
                Country<br />
                info@example.com<br />
                +1 234 567 890
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
};

export default ServiceDetails;
