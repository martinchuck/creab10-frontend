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
          
        </Box>
        
          <CoursesForm />
          
          
          <Grid container  spacing={2} sx={{
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
