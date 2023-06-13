import React, { useEffect, useContext } from "react";
import { Box, Typography, Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthToken } from "../../shared/login";
import NavBar from "../navbar/NavBar";
import EditorComponent from "./EditorComponent";
import MenuItems from "./MenuItems";
import { CourseContext } from "../../context/CourseContext";

function Course() {
  const token = getAuthToken();
  const navigate = useNavigate();
  const { id } = useParams();
  const { courses } = useContext(CourseContext);
  console.log(id);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const navArrayLinks = [
    {
      title: "Inicio",
      path: "/dashboard",
    },
  ];

  const course = courses.find((course) => course.id === id);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar navArrayLinks={navArrayLinks} />
        
        <Container
          sx={{
            bgcolor: "background.paper",
            borderRadius: 6,
            p: 2,
            mt: 10,
          }}
        >
        <Typography
          variant="h1"
          color="initial"
          align="center"
          sx={{
            fontWeight: "700",
            fontSize: "2rem",
            m: 1,
            mx: 2,
          }}
        >
          {course.name}
        </Typography>
        <MenuItems />

          <EditorComponent />
        </Container>
      </Box>
    </>
  );
}

export default Course;
