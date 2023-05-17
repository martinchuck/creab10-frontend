import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../shared/api";
import { getAuthToken, useLogout } from "../shared/login";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { Card, CardActions, CardContent } from "@mui/material";

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
      </Box>

      <Card sx={{ m: 10 ,minWidth: 40,
      width: 250 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Curso de Fotografía 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          En proceso
        </Typography>
        <Typography variant="body2">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Editar</Button>
      </CardActions>
    </Card>
      <button
        onClick={async () => {
          const response = await api.get("/users");
          console.log(response);
        }}
      >
        Send request with token
      </button>
      <br />
    </>
  );
};
