import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { getAuthToken, } from "../../shared/login";
import EditorJS from '@editorjs/editorjs';
import ConfigurationEditor from "./ConfigurationEditor";

import NavBar from "../navbar/NavBar";

function Course({ navArrayLinks }) {
  const token = getAuthToken();
  const navigate = useNavigate();
  const editor = new EditorJS();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar navArrayLinks={navArrayLinks} />
        <Typography variant="h1" color="initial" sx={{
          fontWeight: "700",
          fontSize: "2rem",
        }}
        >
          Curso
        </Typography>
      </Box>
    </>
  );
}

export default Course;
