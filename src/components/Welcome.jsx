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

export const Welcome = () => {
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
          <Typography variant="span" color="initial" sx={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontWeight: "700",
            backgroundColor: "#54D62C29",
            color: "#229A16",
            padding: "0rem 0.3rem",
            borderRadius: "0.5rem",
          }}
          >
            📚Cursos B10
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
