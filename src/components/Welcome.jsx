import { useEffect, useState } from "react";
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
import { courses as data } from "./courses";

export const Welcome = () => {
  const token = getAuthToken();
  const navigate = useNavigate();
  const logout = useLogout();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(data);
  }, []);

  function createCourse(course) {
    setCourses([
      ...courses,
      {
        id: courses.length+1,
        name: course.courseName,
        description: course.description,
      },
    ]);
  }
  function deleteCourse(courseId){
    setCourses( courses.filter((course) => course.id !== courseId))

  }

  return (
    <>
      <Grid>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "bold" }}
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
          <CoursesForm createCourse={createCourse} />
          <CoursesList courses={courses} deleteCourse={deleteCourse} />
        </Box>
        <Container>
          <Grid container spacing={5}></Grid>
        </Container>

        <br />
      </Grid>
    </>
  );
};
