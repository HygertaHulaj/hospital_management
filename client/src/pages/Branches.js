import React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Icon, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import hospital1 from "../assets/hospital.jpg";
import hospital2 from "../assets/hospital2.jpg";
import hospital4 from "../assets/hospital4.jpg";
import hospital5 from "../assets/hospital5.jpg";
import hospital6 from "../assets/hospital6.jpg";
import hospital7 from "../assets/hospital7.jpg";
import Topbar from '../components/topbar';
import Navbar from "../Navbar"
const Branches = () => {
    
  const BranchesList = [

    {
      name: "Hospital1",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
      image: hospital1,
      location: "Location ",
      phone: "123-456-7890",
      mapLink: "https://maps.google.com/maps?q=Location%201",
    },
    {
        name: "Hospital2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
        image: hospital2,
        location: "Location ",
        phone: "123-456-7890",
        mapLink: "https://maps.google.com/maps?q=Location%201",
      },
      {
        name: "Hospital3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
        image: hospital4,
        location: "Location ",
        phone: "123-456-7890",
        mapLink: "https://maps.google.com/maps?q=Location%201",
      },
      {
        name: "Hospital4",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
        image: hospital5,
        location: "Location ",
        phone: "123-456-7890",
        mapLink: "https://maps.google.com/maps?q=Location%201",
      },
      {
        name: "Hospital5",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
        image: hospital6,
        location: "Location ",
        phone: "123-456-7890",
        mapLink: "https://maps.google.com/maps?q=Location%201",
      },
      {
        name: "Hospital6",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
        image: hospital7,
        location: "Location ",
        phone: "123-456-7890",
        mapLink: "https://maps.google.com/maps?q=Location%201",
      },
  ];

  return (
    
    <div>
      <Navbar />
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <div>
    <Topbar name="Our Branches"></Topbar>
        </div>
      {BranchesList.map((menu, index) => (
        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={index}>
          <CardActionArea>
            <CardMedia sx={{ minHeight: "400px" }} component={"img"} src={menu.image} alt={menu.name} />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                {menu.name}
              </Typography>
              <Typography variant="body2">{menu.description}</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Icon color="primary" component={LocationOnIcon} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  <Link href={menu.mapLink} target="_blank" rel="noopener">
                    {menu.location}
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Icon color="primary" component={PhoneIcon} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  {menu.phone}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </div>
  );
};

export default Branches;