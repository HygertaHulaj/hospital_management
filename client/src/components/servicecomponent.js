import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const servicecomponent = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ width: 250 }} className="m-4">
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default servicecomponent;
