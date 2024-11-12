import { Box, IconButton, Typography } from '@mui/material';
import Divider, { dividerClasses } from '@mui/material/Divider';
import React from 'react'
import img from '../../assets/blue-sky-with-clouds.jpg'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import 'weather-icons/css/weather-icons.min.css';
import { useWeather } from '../../scenes/global/State';

const WeatherNow = () => {

  const {weatherData,locationName} = useWeather();

  // const renderWeatherData = (data, key, fallback = "Data not available") => {
  //   const value = key.split('.').reduce((obj, k) => (obj && obj[k]) ? obj[k] : undefined, data);
  //   return value || fallback;
  // };

  // const currentTemp = renderWeatherData(weatherData, 'current.temperature_2m');

  const getIconClass = (code) => {
    switch (code) {
      case 0: return "wi wi-day-sunny"; // Clear sky
      case 1: return "wi wi-day-cloudy"; // Mainly clear
      case 2: return "wi wi-cloudy"; // Partly cloudy
      case 3: return "wi wi-cloudy"; // Overcast
      case 45:
      case 48: return "wi wi-fog"; // Fog
      case 51:
      case 53:
      case 55: return "wi wi-day-showers"; // Drizzle
      case 61:
      case 63:
      case 65: return "wi wi-rain"; // Rain
      case 71:
      case 73:
      case 75: return "wi wi-snow"; // Snow
      case 95: return "wi wi-thunderstorm"; // Thunderstorm
      default: return "wi wi-na"; // Unknown weather

      
    }
  };

  return (
    <Box
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }}
    > 
      <Box
         width='100%'
         height='100vh'
         display='flex'
         justifyContent='center'
         alignItems='center'
         padding='50px'
         sx={{
          gap: '20px'
         }}
      >
        <Box 
        flex={4}
        width='100%'
        
        border='1px solid white'
        borderRadius='12px'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        sx={{backgroundColor: 'white'}}
       >  

        {/* TOP BOX */}

        <Box
          height='100px'
          p='40px'
          display='flex'
          justifyContent='space-between'
          alignItems='ceter'
        >
          <Box>
            <Typography 
              variant='h4'
              fontWeight='600'
              display='flex'
            >
              Today
              <Typography variant='h5' mt='10px'>
              ,{weatherData?.current?.time?  new Date(weatherData.current.time).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }) : 'Date not available'}  
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              p: '5px',
              mt:'10px',
              alignItems: 'center',
              height:'20px',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              backdropFilter: 'blur(10px)', 
              color: 'grey',
              '& svg': {
                m: 1,
              },
              [`& .${dividerClasses.root}`]: {
                mx: 0.5,
              },
            }}
          >
            Min {weatherData?.daily?.temperature_2m_max  && weatherData?.daily?.temperature_2m_min[0]} <i className="wi wi-celsius" style={{ fontSize: '20px', color: 'grey' }}></i>
            <Divider orientation="vertical" flexItem />
            Max {weatherData?.daily?.temperature_2m_max  && weatherData?.daily?.temperature_2m_max[0]}  <i className="wi wi-celsius" style={{ fontSize: '20px', color: 'grey' }}></i>
          </Box>          
        </Box>
        <Box
          p='40px'
          display='flex'
          justifyContent='space-between'
        >
          <Typography variant='h3' fontWeight='500'>
            <Typography variant='h5' fontWeight='600'>
              {weatherData?.current?.time ? 
                  new Date(weatherData.current.time).toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true, 
                  }) : 'Time not available'}
            </Typography>
            {locationName || "Location not available"}
          </Typography> 
          {/* <Typography> {weatherData?.latitude } °</Typography>
          <Typography> {weatherData?.longitude} °</Typography>
          <Typography> {weatherData?.timezone} </Typography> */}
          <Box 
            display='flex'
            justifyContent='center'
          >
            <IconButton ><WbSunnyIcon sx={{color:'#FFD700', fontSize:'80px'}} /></IconButton>
            <Typography sx={{fontSize:'4rem', fontWeight:'600', }}>{weatherData?.current?.temperature_2m}</Typography><i className="wi wi-celsius" style={{ fontSize: '50px', color: 'black'}}></i>
          </Box>
          
        </Box>      
      </Box>



      <Box 
        flex={4}
        width='100%'
        border='1px solid white'
        borderRadius='12px'
      
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', 
          backdropFilter: 'blur(1px)',  }}
      >
        <Box
          display='inline'
          justifyContent='center'
          width='100%'
        >
          <Typography
            display='flex'
            width='100%'
            justifyContent='center'
            color='white'
            sx={{fontSize:'4rem', fontWeight:'600', }}
            mt='50px'
          >
           <i className="wi wi-day-cloudy" style={{ fontSize: '50px', color: 'orange', marginTop:'25px', marginRight:'10px'  }}></i> {weatherData?.current?.temperature_2m}<i className="wi wi-celsius" style={{ fontSize: '50px', color: 'white' }}></i>
          </Typography> 
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          width='100%'
        >
           <Box
            sx={{
              display: 'flex',
              p: '5px',
              alignItems: 'center',
              height:'40px',
              width:'55%',
              justifyContent:'center',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              gap:'12px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)', 
              color: 'white',
              '& svg': {
                m: 1,
              },
              [`& .${dividerClasses.root}`]: {
                mx: 0.5,
              },
            }}
          >
            <i className="wi wi-sunrise" style={{ fontSize: '20px', color: 'orange' }}>
              </i>Sunrise - 
              {
                weatherData?.daily?.sunrise && weatherData.daily.sunrise[0]
                  ? (() => {
                      const sunriseStr = weatherData.daily.sunrise[0];
                      
                      // Parse the sunrise time string and convert to a Date object
                      const sunriseDate = new Date(sunriseStr);
                      
                      // Check if it's a valid date
                      if (sunriseDate instanceof Date && !isNaN(sunriseDate)) {
                        return sunriseDate.toLocaleTimeString('en-GB', {
                          hour: '2-digit',
                          minute: '2-digit',
                        });
                      }
                                    
                      return 'Invalid Time';
                    })()
                  : 'Sunrise not available'
              }
                  
            <Divider orientation="vertical" flexItem  />
            <i className="wi wi-sunset" style={{ fontSize: '20px', color: '#FD5E53' }}></i>Sunset -   
            {
                weatherData?.daily?.sunset && weatherData.daily.sunset[0]
                  ? (() => {
                      const sunriseStr = weatherData.daily.sunset[0];
                      
                      // Parse the sunrise time string and convert to a Date object
                      const sunriseDate = new Date(sunriseStr);
                      
                      // Check if it's a valid date
                      if (sunriseDate instanceof Date && !isNaN(sunriseDate)) {
                        return sunriseDate.toLocaleTimeString('en-GB', {
                          hour: '2-digit',
                          minute: '2-digit',
                        });
                      }
                                    
                      return 'Invalid Time';
                    })()
                  : 'Sunset is not available'
              }
          </Box>
        </Box>
        

        
        <Box
          display='flex'
          justifyContent="space-around"
          alignItems='center'
          p='10px'
          sx={{
            
            overflowX: 'auto',  
            whiteSpace: 'nowrap', 
            gap: '12px',
            width:'580px',
            '&::-webkit-scrollbar': {
              display: 'none', 
            },
            scrollbarWidth: 'none',
            
          }}
        >
        {weatherData?.hourly?.slice(0, 24).map((temp, index) => {

          const hour =  (index + new Date().getHours()) % 24;   
          const iconClass = getIconClass(temp); 

          return (
            <Box
              key={index}
              sx={{
                display: 'inline-flex',
                p: '5px',
                alignItems: 'center',
                height:'40px',
                width:'100%',
                justifyContent:'space-evenly',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                gap:'12px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                '& svg': { m: 1 },
              }}
            >
              <IconButton>
                <i className={`wi ${iconClass}`} style={{ fontSize: '20px', color: 'red ' }}></i>
                <Typography ml='10px' color='white'>
                  Temperature : 
                </Typography>
              </IconButton>
              <Typography>
                {hour} h
                <i className="wi wi-day-haze" style={{ fontSize: '30px', color: 'orange ', marginTop:'5px', marginLeft:'10px'}}></i>
              </Typography>
              <Typography marginTop='5px'>
                {temp} <i className="wi wi-celsius" style={{ fontSize: '20px', color: 'white' }}></i>
              </Typography>
            </Box>
          );
        })}
      </Box>

        <Box
          display='flex'
          justifyContent="space-around"
          alignItems='center'
          p='10px'
        >
           <Box
            sx={{
              display: 'flex',
              p: '5px',
              alignItems: 'center',
              height:'40px',
              width:'100%',
              justifyContent:'space-evenly',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              gap:'12px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(10px)', 
              color: 'white',
              '& svg': {
                m: 1,
              },
              [`& .${dividerClasses.root}`]: {
                mx: 0.5,
              },
            }}
          >
            <IconButton >
              <i className="wi wi-umbrella" style={{ fontSize: '20px', color: '#84b8d3 ' }}></i> 
              <Typography 
                ml='10px'
                color='white'
              >
                Precipitaion forcast : 
              </Typography>
            </IconButton>
            <Typography > 

                  {weatherData?.current?.precipitation} mm

                <i className="wi wi-day-cloudy" style={{ fontSize: '20px', color: 'orange', marginTop:'5px', marginLeft:'10px'}}></i> </Typography>
            <Typography marginTop='5px'>max-prob  {weatherData?.daily?.precipitation_probability_max && weatherData?.daily?.precipitation_probability_max[0]} mm</Typography>
          </Box>
        </Box>
        

        <Box
          display='flex'
          justifyContent="space-around"
          alignItems='center'
          p='10px'
        >
           <Box
            sx={{
              display: 'flex',
              p: '5px',
              alignItems: 'center',
              height:'40px',
              width:'100%',
              justifyContent:'space-evenly',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              gap:'12px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(10px)', 
              color: 'white',
              '& svg': {
                m: 1,
              },
              [`& .${dividerClasses.root}`]: {
                mx: 0.5,
              },
            }}
          >
            <IconButton >
              <i className="wi wi-windy" style={{ fontSize: '20px', color: 'grey ' }}></i> 
              <Typography 
                ml='10px'
                color='white'
              >
                Wind Speed : 
              </Typography>
            </IconButton>
            <Typography > 
                Direction : {weatherData?.current?.wind_direction_10m} °
                <i className="wi wi-strong-wind" style={{ fontSize: '30px', color: 'grey', marginTop:'5px', marginLeft:'10px'}}></i> </Typography>
            <Typography marginTop='5px'>  {weatherData?.current?.wind_speed_10m} km/h</Typography>
          </Box>
        </Box>

        <Box
          display='flex'
          justifyContent="space-around"
          alignItems='center'
          p='10px'
        >
           <Box
            sx={{
              display: 'flex',
              p: '5px',
              alignItems: 'center',
              height:'40px',
              width:'100%',
              justifyContent:'space-evenly',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              gap:'12px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(10px)', 
              color: 'white',
              '& svg': {
                m: 1,
              },
              [`& .${dividerClasses.root}`]: {
                mx: 0.5,
              },
            }}
          >
            <IconButton >
              <i className="wi wi-hot" style={{ fontSize: '20px', color: '#FD5E53 ' }}></i> 
              <Typography 
                ml='10px'
                color='white'
              >
                Humidity : 
              </Typography>
            </IconButton>
            <Typography > {weatherData?.current?.relative_humidity_2m } % <i className="wi wi-day-haze" style={{ fontSize: '30px', color: 'orange ', marginTop:'5px', marginLeft:'10px'}}></i> </Typography>
            <Typography marginTop='5px'>  surf-press : {weatherData?.current?.surface_pressure} hpa</Typography>
          </Box>
        </Box>

      </Box>
      </Box>
      
       
    </Box>
  )
}

export default WeatherNow ;

