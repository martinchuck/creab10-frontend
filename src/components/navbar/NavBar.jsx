import { AppBar, Button, Drawer, Toolbar, Typography, IconButton, Box } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useLogout } from "../../shared/login";
import { NavLink } from "react-router-dom";



export default function NavBar({navArrayLinks}) {
    const [open, setOpen] = useState(false);
    const logout = useLogout();
    return (
        <>
        <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "bold",   }}
              >
              <IconButton aria-label="menu-icon" color="inherit" size="large"  onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
                Crea B10
              </Typography>

    
              {navArrayLinks && navArrayLinks.map((item,index) => ( 
                <Button
                key={index}
                color="inherit"
                component={NavLink}
                to={item.path}
                sx={{ fontWeight: "bold" }}
                >
                {item.title}
                </Button>
              ))
                }
               
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
        <Drawer open={open} onClose={() => setOpen(false)}>
            <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink}/>
        </Drawer>
        </>
    ) 
}