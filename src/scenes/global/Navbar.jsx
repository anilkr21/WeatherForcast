import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'



const Navbar = () => {

    const navItems = ['Weather' , 'About', 'Map' ];

    const [navItem, setnavItem] = useState(null);
    
    const handleOpenNavItem = (event) => {
        setnavItem(event.currentTarget);
    }

    const handleCloseNavItem = (event) =>{
        setnavItem(null);
    }
    

  return (
    <Box
        width="100%"
        height="60px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="10px"
        position="fixed"
        left="0"
        top="0"
        zIndex="1"
        sx={{backgroundColor: 'transparent'}}
        >
            {/*  Navbar Title */}
            <Box 
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="10px"
                color="white"
                marginLeft="50px"
                
                >
                    <Typography 
                        variant='h6'
                        sx={{flexGrow:1, cursor:'pointer'}}
                    >
                        Weather Now
                    </Typography>
            </Box>

            {/* Navbar components */}
            <Box
                display="flex"
                marginRight="50px"
              sx={{  display: {xs:'none', md: 'flex' }}}
            >
                {navItems.map((items) => (
                    <Button
                        
                        key={items}
                        onClick={handleCloseNavItem}
                        sx={{
                            color:'white',
                            marginRight:'20px',
                            display: { md:"flex"}
                        }}
                    >
                        {items}
                    </Button>
                ))}
            </Box>
    </Box>
  )
}

export default Navbar