import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuthToken, useLogout } from "../shared/login";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import CoursesList from "./CoursesList";
import EmptyCard from "./EmptyCard";
import { CourseContext } from "../context/CourseContext";
import { useContext } from "react";
import { useState } from "react";
import NavBar from "./navbar/NavBar";
import CoursesTable from "./CoursesTable";
import TableRowsIcon from '@mui/icons-material/TableRows';
import ArticleIcon from '@mui/icons-material/Article';



export const Welcome = () => {
  const [coursesLength, setCoursesLength] = useState(0);
  const { courses } = useContext(CourseContext);
  const [viewCourse, setViewCourse] = useState("card-view");
  const token = getAuthToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

    const navArrayLinks = [
    {
        title: 'Inidfgcio',
        path: '/dashboard',
        
    }
]
 
  return (
    
    <>
        <Box sx={{ flexGrow: 1 }}>
        <NavBar navArrayLinks={navArrayLinks}/>
          {/* <button
            onClick={async () => {
              const response = await api.get("/users");
              console.log(response);
            }}
          >
            Send request with token
          </button> */}
          
        </Box>
       
        <Box m={1} mx={2} display="flex"
        justifyContent="space-between">
          <Typography variant="p" color="initial" sx={{
            fontWeight: "700",
            fontSize: "2rem",
          }}
          >
            📚Cursos B10
          </Typography>
        
          <ToggleButtonGroup size="small"
      label="courses-view"
      value={viewCourse}
      exclusive
      onChange={
        (event, newViewCourse) => {
          setViewCourse(newViewCourse);
        }
        
      }
      fontSize="small"
      aria-label="Platform"
    >
          <ToggleButton value="table-view">
            <TableRowsIcon/>  
          </ToggleButton>
      <ToggleButton value="card-view">
      <ArticleIcon/>
      </ToggleButton>
    </ToggleButtonGroup>
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

          {viewCourse === "card-view" ? <CoursesList /> : <CoursesTable />}
          <EmptyCard />
          </Grid>
          
          
    </>
    
  );
};
