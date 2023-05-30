import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  ListItem,
  ListItemText,
  List,
  ListItemIcon
} from '@mui/material';
import Topbar from '../components/topbar';
const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));


const BloodDonation = () => {
  const classes = useStyles();
  const [patientId, setPatientId] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [donationDate, setDonationDate] = useState('');
  const [donationStatus, setDonationStatus] = useState('');
  const [quantityDonated, setQuantityDonated] = useState('');
  const [comments, setComments] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      patient_id: parseInt(patientId),
      blood_type: bloodType,
      contact_details: contactDetails,
      donation_date: donationDate,
      // donation_status: donationStatus,
      quantity_donated: parseInt(quantityDonated),
      comments: comments,
    };
    fetch('http://localhost:8000/blood-donations/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data posted successfully');
          // Reset the form fields
          setPatientId('');
          setBloodType('');
          setContactDetails('');
          setDonationDate('');
          // setDonationStatus('');
          setQuantityDonated('');
          setComments('');
        } else {
          console.error('Failed to post data');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    
    <React.Fragment >
      <Topbar name="Bood Doantion" ></Topbar>
      <h1>Be a Hero: Make a Difference through Blood Donation</h1>
      <h3><em>Every year, millions of lives are saved thanks to the selfless act of blood donation. By donating blood, you become a hero, contributing to the well-being and survival of people in need.
         Whether it's for emergencies, surgeries, or ongoing medical treatments, your donation can make a significant impact.
This entry aims to shed light on the importance of blood donation, the process involved, and the incredible benefits it brings to individuals and communities.</em></h3>
      <Typography variant="h5" gutterBottom>
        Conditions for Blood Donation:
      </Typography>
      <List  style={{ backgroundColor: "#f8f8f8", padding: "36px",borderRadius:" 4px",margin:"26px"}}>
        <ListItem>
          <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Be at least 18 years old (or according to local regulations)" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Weigh at least 50 kilograms (110 pounds)" />
        </ListItem>
        <ListItem>
          <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Be in good overall health" />
        </ListItem>
        <ListItem>
          <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Have a valid identification document (e.g., driver's license, passport)" />
        </ListItem>
        <ListItem>
          <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have donated blood within the last 56 days" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have received a blood transfusion in the past 12 months" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have traveled to certain countries with high-risk diseases within the last 3 years" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have a history of drug use (intravenous)" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have a history of certain medical conditions (e.g., HIV, hepatitis)" />
        </ListItem>
        <ListItem>
        <span style={{fontsSize: "16px",marginRight: "8px"}} >&#8226;</span>
          <ListItemText primary="Not have engaged in risky sexual behavior within the last 12 months" />
        </ListItem>
      </List>
      <Typography variant="h6" gutterBottom>
        Donate Now
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Patient ID"
        type="number"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        required
      />
      <TextField
        label="Blood Type"
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
        required
      />
      <TextField
        label="Contact Details"
        value={contactDetails}
        onChange={(e) => setContactDetails(e.target.value)}
        required
      />
      <TextField
        label="Donation Date"
        type="date"
        value={donationDate}
        onChange={(e) => setDonationDate(e.target.value)}
        required
      />
      {/* <TextField
        label="Donation Status"
        value={donationStatus}
        onChange={(e) => setDonationStatus(e.target.value)}
        required
      /> */}
      <TextField
        label="Quantity Donated"
        type="number"
        value={quantityDonated}
        onChange={(e) => setQuantityDonated(e.target.value)}
        required
      />
      <TextField
        label="Comments"
        multiline
        rows={4}
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Create Blood Donation
      </Button>
    </form>

    </React.Fragment>
  );
};

export default BloodDonation;