import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken, useLogout } from "../shared/login";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { Container, Grid } from "@mui/material";
import CoursesForm from "./CoursesForm";
import CoursesList from "./CoursesList";
import EmptyCard from "./EmptyCard";
import { createTheme, ThemeProvider } from '@mui/material';
import { CourseContext } from "../context/CourseContext";
import { useContext } from "react";
import { useState } from "react";


export const Welcome = () => {
  const [coursesLength, setCoursesLength] = useState(0);
  const { courses } = useContext(CourseContext);
  const token = getAuthToken();
  const navigate = useNavigate();
  const logout = useLogout();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);


   





  return (
    
    <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "bold",   }}
              >
                Crea B10
              </Typography>
              <Button
                color="inherit"
                onClick={async () => {
                  logout();
                }}
                sx={{ fontWeight: "bold" }}
                endIcon={<LogoutIcon />}
              >
                Cerrar sesión
              </Button>
            </Toolbar>
          </AppBar>
          {/* <button
            onClick={async () => {
              const response = await api.get("/users");
              console.log(response);
            }}
          >
            Send request with token
          </button> */}
          
        </Box>
        <Box m={1} mx={2}>
          <Typography variant="h1" color="initial" sx={{
            fontWeight: "700",
            fontSize: "2rem",
            
          }}
          >
            📚Cursos B10
          </Typography>
          </Box>
          <Typography variant="h6" color="initial" sx={{
            fontWeight: "400",
           
            mt: 2,
            mb: 2,
            ml: 2,
            mr: 2,
          }}
          >
            {courses.length > 0 ? `Total de cursos: ${courses.length}` : "No tienes cursos creados"}
            
          </Typography>
          <Grid container  spacing={1} sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          
            
          }}>
        
          <CoursesList />
          <EmptyCard />
          </Grid>
          
          
    </>
    
  );
};
