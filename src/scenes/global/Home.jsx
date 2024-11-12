import React from 'react';
import Box from '@mui/material/Box'
import Navbar from './Navbar';
import Sunrise from '../../assets/Sunrise.jpg'
import MainDashboard from './MainDashboard';
import CardItems from './CardItems';


const Home = () => {
  return (
    <Box 
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${Sunrise})`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}
      >
      <Navbar />
      <Box 
           sx={{
            width: '100%',
            flexGrow: 1, // This will make MainDashboard take up the remaining space
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
          }}
        >
        <MainDashboard />
      </Box>
      <Box 
           sx={{
            width: '100%',
            flexGrow: 1, // This will make MainDashboard take up the remaining space
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
        <CardItems />
      </Box>
    </Box>
  )
}

export default Home