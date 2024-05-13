import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavigationBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ flexGrow: 1, backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="black"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {/* Your Brand Name Here */}
          </Typography>
          <Box sx={{ display: 'flex', flexGrow: 0, color: 'black' }}>
            {/* Placeholder for right-aligned links */}
            <Typography sx={{ margin: '0 10px'  }}>GitHub </Typography>
            <Typography sx={{ margin: '0 10px' }}>LinkedIn</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { width: '250px' } }}
      >
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          {/* Add more items here */}
        </List>
      </Drawer>
    </>
  );
}

export default NavigationBar;
