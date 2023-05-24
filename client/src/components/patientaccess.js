import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Link } from "@mui/material";
import BloodDonation from './bloodDonation';

const PatientAccess = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <Card
      sx={{ width: 250, ...cardStyle }}
      className="m-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button
          component={Link}
          to='./BloodDonation'
          variant="contained"
          color="primary"
          size="small"
          style={{ marginTop: 10, marginBottom: 15 }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default PatientAccess;
