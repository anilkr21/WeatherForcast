import { Box, Button, Card, CardActions, CardContent, Paper, Typography, styled} from '@mui/material'
import React from 'react';
import { useWeather } from './State';

const CardItems = () => {

    const { recentSearches } = useWeather();
    
    if (!recentSearches || recentSearches.length === 0) {
        return <Typography>No recent searches available.</Typography>;
      }
      
  return (
    <Box display='flex'
            justifyContent='center'
            alignItems='center'
            p='5px'
            >
        <Box 
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
            height='auto'
            sx={{gap:'80px'}}
            >
            {recentSearches.map((search, index) => (
                <Card key={index} sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {search.location}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {search.weatherData?.current?.temperature_2m} °C
                    </Typography>
                    <Typography variant="body2">
                        Max Temp: {search.weatherData?.daily?.temperature_2m_max} °C
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Visakhapatnam
                </Typography>
                <Typography variant="h5" component="div">
                    23 *C
                </Typography>
                
                <Typography variant="body2">
                    max-temp
                <br />
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Visakhapatnam
                </Typography>
                <Typography variant="h5" component="div">
                    23 *C
                </Typography>
                
                <Typography variant="body2">
                    max-temp
                <br />
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
            
        </Box>
        
    </Box>
  )
}

export default CardItems