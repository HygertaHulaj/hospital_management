
import React, { useState } from 'react';
import { InputAdornment,TextField, Select, MenuItem, FormControl, Button,Grid,Card,Checkbox,ListItemText,   CardContent,Typography,CardMedia} from '@material-ui/core';
// import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Topbar from '../components/topbar';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';

function DoctorProfile() {
  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    qualifications: '',
    bio: '',
    specialty: ['Cardio'],
    education: [
      ''
    ],
    experience: '',
    contact: {
      address: '',
      phone: '',
      email: '',
      website: '',
    },
   
      social: {
        facebook: '',
        instagram: '',
        linkedin: '',
        twitter: '',
      },
    
    
  });
  const styles = {
    textField: {
      marginBottom: 8,
    },
    button: {
      marginTop: 8,
      marginBottom: 8,
    },
  };
  const specialties = [
    { id: 1, name: 'Cardiology' },
    { id: 2, name: 'Dermatology' },
    { id: 3, name: 'Endocrinology' },
    // ...
  ];
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDoctorInfo({
      ...doctorInfo,
      [name]: value,
    });
  };
  const handleSpecialtyChange = (event, maxLength) => {
    const options = event.target.options;
    const selected = [];
    let i = 0;
    while (selected.length < maxLength && i < options.length) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
      i++;
    }
    setDoctorInfo({
      ...doctorInfo,
      specialty: selected,
    });
  };

  

  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    const education = [...doctorInfo.education];
    education[name] = value;
    setDoctorInfo({
      ...doctorInfo,
      education: education,
    });
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setDoctorInfo({
      ...doctorInfo,
      contact: {
        ...doctorInfo.contact,
        [name]: value,
      },
    });
  };

const [imageSrc, setImageSrc] = useState('');
 const handleImageChange = (event) => {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  setImageSrc(url);
};
const handleSocialChange = (event) => {
  const { name, value } = event.target;
  setDoctorInfo((prevDoctorInfo) => ({
    ...prevDoctorInfo,
    social: {
      ...prevDoctorInfo.social,
      [name]: value,
    },
  }));
};


  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the updated information to a database or API
  };

  return (
    <div>
      <Topbar name="Your Profile"></Topbar>
        <Box p={9}>
        <Grid container  spacing={2} justifyContent="space-between" >
        <Grid xs={3}justifyContent="space-evenly" >
          <Grid item xs={50}>
            <Box mb={10}>
              <Card variant="outlined">
                <Button color="primary" variant="contained" component="label">
                    Upload
                    <input color="primary" type="file" accept="image/*" onChange={handleImageChange} />
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                <input color="primary" type="file" accept="image/*" onChange={handleImageChange} />
                  <PhotoCamera />
                </IconButton>
                  {imageSrc && (
                    <CardMedia
                      component="img"
                      height="240"
                      src={imageSrc}
                      alt="selected image"
                    />
                  )}
                <CardContent>
                  <h2>
                    <label htmlFor="name">Facebook:</label>
                  </h2>
                  <TextField
                    InputProps={{
                                startAdornment: <InputAdornment position="start">{<FacebookIcon />}</InputAdornment>,
                              }}
                    variant="standard"
                    label="Website"
                    name="facebook"
                    value={doctorInfo.social.facebook}
                    onChange={handleSocialChange}
                  />
                  <TextField
                    InputProps={{
                                startAdornment: <InputAdornment position="start">{<LinkedInIcon />}</InputAdornment>,
                              }}
                    variant="standard"
                    label="Website"
                    name="linkedin"
                    value={doctorInfo.social.linkedin}
                    onChange={handleSocialChange}
                  />
                  <TextField
                    InputProps={{
                                startAdornment: <InputAdornment position="start">{<InstagramIcon />}</InputAdornment>,
                              }}
                    variant="standard"
                    label="Website"
                    name="instagram"
                    value={doctorInfo.social.instagram}
                    onChange={handleSocialChange}
                  />
                  <TextField
                    InputProps={{
                                startAdornment: <InputAdornment position="start">{<TwitterIcon />}</InputAdornment>,
                              }}
                    variant="standard"
                    label="Website"
                    name="twitter"
                    value={doctorInfo.social.twitter}
                    onChange={handleSocialChange}
                  />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        
        <Grid item xs={50}>
          <Box mb={6}>
            <Card variant="outlined">              
              <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    <AccessTimeIcon/>
                    Availability
                  </Typography>
                  <TextField
                    variant="standard"
                    name="dayone"
                    value={doctorInfo.social.dayone}
                    onChange={handleSocialChange}
                  />
                  <TextField
                    variant="standard"
                    name="daytwo"
                    value={doctorInfo.social.daytwo}
                    onChange={handleSocialChange}
                  />
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={25}>
          <Card>            
            <h3>
              <label htmlFor="bio">Any Request?</label>
            </h3>
            <TextField 
              sx={{ margin: 20 }}
              fullWidth 
              variant="outlined"
              multiline 
              id="request" 
              name="request" 
              value={doctorInfo.request} 
              onChange={handleInputChange} 
            />
            <Button color="primary" variant="contained" endIcon={<SendIcon />}style={styles.button}>
              Send
            </Button>
          </Card>
        </Grid>
      </Grid>
      
      <Grid item >
        {/* <Box  sx={{ display: 'flex-end' }}> */}
        <Card variant="outlined" spacing={3} >
          <form onSubmit={handleSubmit}>
            <h2>
              <label htmlFor="name">Name:</label>
            </h2>
            <TextField id="name"required  label="Required" variant="outlined" name="name" value={doctorInfo.name} onChange={handleInputChange} />
            <h3>
              <label htmlFor="qualifications">Qualifications:</label>
            </h3>
            <TextField required  label="Required" variant="outlined"id="qualifications" name="qualifications" value={doctorInfo.qualifications} onChange={handleInputChange} />
            <h3>
              <label htmlFor="bio">Bio:</label>
            </h3>
            <TextField fullWidth variant="outlined" multiline id="experience" name="experience" value={doctorInfo.bio} onChange={handleInputChange} />
            <h3>
              <label htmlFor="specialty">Specialty:</label>
            </h3>
            <FormControl>
              <Select
                  variant="outlined"
                  id="specialty"
                  name="specialty"
                  fullWidth
                  
                  value={doctorInfo.specialty}
                  onChange={handleSpecialtyChange}
                  label="Speciality"
                  renderValue={(selected) => selected.join(', ')}
                >
                {specialties.map(specialty => (
                  <MenuItem key={specialty.id} value={specialty.name}>
                    <Checkbox checked={doctorInfo.specialty && doctorInfo.specialty.includes(specialty.name)} />
                    <ListItemText primary={specialty.name} />
                  </MenuItem>
            ))}

              </Select>
          </FormControl>

            <h3>
              <label htmlFor="education">Education:</label>
            </h3>
            <div>
              {doctorInfo.education.map((education, index) => (
              <div key={index}>
                <TextField fullWidth  variant="outlined" name={index} value={education} onChange={handleEducationChange} style={styles.button}/>
              </div>
              ))}
              <Button
                style={styles.button}
                variant="contained"
                color="primary"
                onClick={() =>
                  setDoctorInfo({
                    ...doctorInfo,
                    education: [
                      ...doctorInfo.education,
                      'New Education',
                    ],
                  })
                }
            >
            Add Education
              </Button>
        
            </div>

            <h3>
              <label htmlFor="experience">Experience:</label>
            </h3>
            <TextField fullWidth variant="outlined" multiline id="experience" name="experience" value={doctorInfo.experience} onChange={handleInputChange} />

            <h3>Contact Information:</h3>
            <div>
              <TextField required variant="outlined" name="address" label="Address" value={doctorInfo.contact.address} onChange={handleContactChange} />
              <TextField required  variant="outlined" name="phone" label="Phone" value={doctorInfo.contact.phone} onChange={handleContactChange} />
              <TextField required variant="outlined" name="email" label="Email" value={doctorInfo.contact.email} onChange={handleContactChange} />
              <TextField required variant="outlined" name="website" label="Website" value={doctorInfo.contact.website} onChange={handleContactChange} />
            </div>

            <Button variant="contained" color="primary" type="submit"style={styles.button}>
              Save
            </Button>
          </form>
        </Card>
    {/* </Box> */}
      </Grid>
        </Grid>
        </Box>
    </div>
  );
}
export default DoctorProfile;
