import React, { useRef, useEffect } from 'react';
import { Box, Typography, IconButton, Link, useTheme } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { gsap } from 'gsap';

function Footer() {
  const theme = useTheme();
  const footerRef = useRef();

  useEffect(() => {
    gsap.fromTo(footerRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <Box ref={footerRef} sx={{
      padding: theme.spacing(10, 2),
      backgroundColor: theme.palette.background.default, 
      textAlign: 'center',
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box sx={{ '& > :not(style)': { m: 2 } }}>
        <IconButton component="a" href="https://twitter.com" target="_blank">
          <TwitterIcon />
        </IconButton>
        <IconButton component="a" href="https://github.com" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton component="a" href="https://linkedin.com" target="_blank">
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
