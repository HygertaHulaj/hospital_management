import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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

  const handleTitleClick = () => {
    // Redirect to another page
    window.location.href = "./bloodDonation";
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Card
        sx={{ width: 600, ...cardStyle }}
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
            component={RouterLink} // Use RouterLink instead of Link
            to="/bloodDonation" // Specify the correct route path
            variant="contained"
            color="primary"
            size="small"
            style={{ marginTop: 10, marginBottom: 15 }}
          >
            Read More
          </Button>
        
        </CardContent>
      </Card>
      <h1
        style={{
          backgroundColor: "transparent",
          color: "black",
          padding: "100px",
          cursor: "pointer",
          whiteSpace: "pre-wrap",
          fontWeight: "bold",
          fontSize: "30px",
        }}
        onClick={handleTitleClick}
      >
        Blood Donation
      </h1>
    </div>
  );
};

export default PatientAccess;
