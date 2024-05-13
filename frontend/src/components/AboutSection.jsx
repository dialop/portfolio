import React, { useRef, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Link, useTheme } from '@mui/material';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

function AboutSection() {
  const theme = useTheme();
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  const colors = {
    firstBox: '#FFCDD2', // Light pink
    secondBox: '#F5F5F5', // Pink
    thirdBox: '##F5F5F5', // Purple
    fourthBox: '#D1C4E9', // Light purple
    fifthBox: '#C5CAE9', // Light blue
    sixthBox: '#F5F5F5', // Light blue
  };

  const boxStyle = {
    height: '900px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.shape.borderRadius,
  };

  const questionBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  };

  const linkStyle = {
    marginTop: theme.spacing(2),
    fontWeight: '500',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  };

  const handleMouseEnter = (element) => {
    gsap.to(element, { x:0, duration: 0.2 });
  };

  const handleMouseLeave = (element) => {
    gsap.to(element, { x: 0, duration: 0.2 });
  };

  return (
    <motion.div ref={sectionRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Box sx={{ maxWidth: '90%', margin: 'auto', padding: theme.spacing(8, 2) }}>
        <Grid container spacing={6}>
          {/* Large box */}
          <Grid item xs={12}>
            <motion.div
              whileHover={{ rotateY: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Paper
                elevation={6}
                sx={{ ...boxStyle, bgcolor: colors.firstBox }}
                onMouseEnter={() => handleMouseEnter(sectionRef.current)}
                onMouseLeave={() => handleMouseLeave(sectionRef.current)}
              >
                {/* Content for the large box */}
              </Paper>
            </motion.div>
          </Grid>
          {/* First row of two boxes */}
          <Grid item xs={12} md={6}>
            <motion.div
              whileHover={{ rotateY: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Paper elevation={6} sx={{ ...boxStyle, bgcolor: colors.secondBox }}>
                {/* Content for the first middle box */}
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              whileHover={{ rotateY: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Paper elevation={6} sx={{ ...boxStyle, bgcolor: colors.thirdBox }}>
                {/* Content for the second middle box */}
              </Paper>
            </motion.div>
          </Grid>
          {/* Second row of two boxes */}
          <Grid item xs={12} md={6}>
            <motion.div
              whileHover={{ rotateY: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Paper elevation={6} sx={{ ...boxStyle, bgcolor: colors.fourthBox }}>
                {/* Content for the third box */}
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              whileHover={{ rotateY: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Paper elevation={6} sx={{ ...boxStyle, bgcolor: colors.fifthBox }}>
                {/* Content for the fourth box */}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
        <Grid container spacing={40} sx={{ marginTop: theme.spacing(10) }}>
          <Grid item xs={12}>
            <Paper elevation={6} sx={{ ...boxStyle, bgcolor: colors.sixthBox }}>
              <Box sx={questionBoxStyle}>
                <Typography variant="h6">
                  Question about my work?
                </Typography>
                <Link href="mailto:dianalophernandez@gmail.com" sx={linkStyle}>
                  Let's connect.
                </Link>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}

export default AboutSection;
