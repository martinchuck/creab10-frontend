import React from 'react'
import { useEffect } from "react";
import { Grid } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";

function Course() {
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
    </>
          
  )
}

export default Course