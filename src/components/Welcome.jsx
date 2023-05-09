import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../shared/api";
import { getAuthToken, useLogout } from "../shared/login";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


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
      <h1>Welcome</h1>
      <button
        onClick={async () => {
          const response = await api.get("/users");
          console.log(response);
        }}
      >
        Send request with token
      </button>
      <br />
      <button
        onClick={async () => {
          logout();
        }}
      >
        Logout
      </button>
    
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit">Menú</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};
