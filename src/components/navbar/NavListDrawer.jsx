import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function NavListDrawer({navArrayLinks, NavLink}) {
    const navigate = useNavigate();
    return( <Box sx={{
        display: { xs: 'none', sm: 'block'},
        width: 250,
    }}>
    <nav>
        <List>
        {navArrayLinks && navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
                <ListItemButton
                component={NavLink}
                to={item.path}>

                <ListItemText >{item.title}</ListItemText>
                </ListItemButton>
            </ListItem>
            ))}
        </List>
    </nav>
    </Box>
    );
}