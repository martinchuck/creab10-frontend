import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function NavListDrawer({navArrayLinks}) {
    const navigate = useNavigate();
    return( <Box sx={{
        display: { xs: 'none', sm: 'block'},
        width: 250,
    }}>
    <nav>
        <List>
        {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
                <ListItemButton
                
                Link to={item.path}>
                <ListItemText primary="Inicio">{item.title}</ListItemText>
                </ListItemButton>
            </ListItem>
            ))}
        </List>
    </nav>
    </Box>
    );
}