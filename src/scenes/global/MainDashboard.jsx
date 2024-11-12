import { Box, IconButton, TextField, Typography, styled} from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { useWeather } from '../../scenes/global/State'; 

const MainDashboard = () => {

  // const { locationName, fetchCoordinates } = useWeather();  // Access location and fetchCoordinates
  const { fetchCoordinates} = useWeather();
  const [searchInput, setSearchInput] = useState('');


  const handleInputChange = (e) => {
    setSearchInput(e.target.value); // Update local state as user types
  };

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchInput.trim() ) {
      fetchCoordinates(searchInput.trim()); // Fetch weather based on the location input
    }  // Fetch coordinates based on search
  };
  return (
<Box 
    
    display='flex'
    flexDirection='column'
>
    <Box 
        display='flex'
        flexDirection='column'
        justifyContent='center'
        >
    <Box
        justifyContent="center"
        alignItems="center"
        p="5px"
        textAlign="center"
        >
            <Box>
                <Typography variant='h2' color='white'>
                    Welcome, Jamie!
                    <Typography variant='h4' color='white'>
                        Ready for your next Adeventure.
                    </Typography>
                </Typography>
            </Box>
            <Box>
              <Box display='flex' m='20px' >
                  <LocationSearchingIcon sx={{color:'white ', margin:'5px', fontSize:'40px', mt:'10px'}} />
                  <TextField 
                        type='text'
                        placeholder="Search loaction"
                        variant="outlined" 
                        value={searchInput} 
                        onChange={handleInputChange}
                      sx={{ width:'75%'}}
                  >
                  
                    Search
                  </TextField>
                  <IconButton  variant="search"  type='submit' onClick={handleSearch} sx={{border:'1px solid grey', borderRadius:'6px', width:'20%'}}>
                        <Typography>Search</Typography>
                  </IconButton>
                  
              </Box>
                  
            </Box>
    </Box>
        <Box 
            width="100%"
            padding="5px"
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            >
           
        </Box>
    </Box>
    
</Box>
  )
}

export default MainDashboard
