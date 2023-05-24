import React, { useRef, useEffect, useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import DepartmentCard from "../components/DepartmentCard";
import { Link } from "react-router-dom";


const DepartmentPage = () => {
  const depContainerRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  const departments = [
    {
      id: 1,
      title: " Cardiology",
      description: "Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system.",
      imageUrl: "/cardiology.jpg",
    },
    {
      id: 2,
      title: "Neorology",
      description: "Neurology is the branch of medicine dealing with the diagnosis of all conditions and disease the brain",
      imageUrl: "/neurology.jpeg",
    },
    {
      id: 3,
      title: "Radiology",
      description: "Radiology is the medical discipline that uses medical imaging to diagnose diseases and guide their treatment",
      imageUrl: "/radiology.jpg",
    },
        {
      id: 4,
      title: "Urology",
      description: "Urology is the branch of medicine that focuses on surgical and medical diseases of the urinary-tract system.",
      imageUrl: "/urology.jpg",
    },
        {
      id: 5,
      title: "Pediatric",
      description: "Pediatrics is the branch of medicine that involves the medical care of infants, children, and young adults. ",
      imageUrl: "/pediatric.jpg",
    },
    {
      id: 6,
      title: "Stomatology",
      description: "Stomatology the branch of medicine or dentistry concerned with the structures, functions, and diseases of the mouth.",
      imageUrl: "/stomatology.jpg",
    },
    {
      id: 7,
      title: "Gynecology",
      description: "Gynecology is the area of medicine for the treatment of women's diseases, especially reproductive organs. ",
      imageUrl: "/gynecology.jpg",
    },
    {
      id: 8,
      title: "Pulmonary",
      description: "Pulmonology or pneumology is known as respirology, respiratory medicine, or chest medicine.",
      imageUrl: "/pulmology.jpg",
    },
        {
      id: 9,
      title: "Rhinoplasty",
      description: "Rhinoplastyis medically called nasal reconstruction is a plastic surgery procedure for reconstructing the nose",
      imageUrl: "/rhinoplasty.jpg",
    },
    {
      id: 10,
      title: "Physiotherapy",
      description: "Physical therapy addresses the illnesses or injuries that limit a person's abilities to move and perform  activities.",
      imageUrl: "/physiotherapy.jpg",
    },
    {
      id: 11,
      title: "Emergency",
      description: "Emergency department is known as an accident and emergency department, emergency room department.",
      imageUrl: "/emergency.jpg",
    },
      ];

  useEffect(() => {
    const container = depContainerRef.current;
    setIsScrollable(container.scrollWidth > container.clientWidth);
  }, []);

  const scrollLeft = () => {
    depContainerRef.current.scrollBy({ left: -depContainerRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    depContainerRef.current.scrollBy({ left: depContainerRef.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Typography variant="h4" component="h1" gutterBottom style={{backgroundColor: '#E1E3F8', color: 'black' }}>
        Departments
      </Typography>
      <Box
        display="flex"
        overflow="hidden"
        ref={depContainerRef}
      >
        {departments.map((department) => (
          <Box key={department.id} minWidth="350px" marginRight="0px" marginLeft="0px" >
            <Link style={{ textDecoration: "none" }}>
            <DepartmentCard
              title={department.title}
              description={department.description}
              imageUrl={department.imageUrl}
            />
            </Link>
          </Box>
        ))}
      </Box>
      {isScrollable && (
        <Box
          display="flex"
          justifyContent="space-between"
          padding="1rem"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={scrollLeft}
            sx={{ borderRadius: "50%" }}
          >
            &lt;
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={scrollRight}
            sx={{ borderRadius: "50%" }}
          >
            &gt;
          </Button>
        </Box>
      )}
    </div>
  );
};

export default DepartmentPage;
