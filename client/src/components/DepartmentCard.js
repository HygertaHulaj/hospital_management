import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
const DepartmentCard = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: 4 }}>
      <img src={imageUrl} alt={title} style={{ width: "100%", height: 200, objectFit: "cover" }} />
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

export default DepartmentCard;
