import React, { useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { getAuthToken, } from "../../shared/login";
import NavBar from "../navbar/NavBar";
import EditorComponent from "./EditorComponent";




function Course({ navArrayLinks }) {
 

  const token = getAuthToken();
  const navigate = useNavigate();


  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);




  return (
    <>
      <Box sx={{ flexGrow: 1, 
       }}>
        <NavBar navArrayLinks={navArrayLinks} />
        <Typography variant="h1" color="initial" sx={{
          fontWeight: "700",
          fontSize: "2rem",
          m: 1, mx: 2
        }}
        >
          Curso
        </Typography>
        <Container sx={{
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "",
          borderRadius: 6,
          p: 2,
        }}>
      <EditorComponent />
        </Container>
      </Box>
    </>
  );
}

export default Course;
