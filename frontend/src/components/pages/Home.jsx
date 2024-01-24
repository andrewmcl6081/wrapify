import { Typography, Box } from '@mui/material'
import Button from '@mui/material/Button'

const Home = () => {

  return (
    <>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="start" 
        style={{ minHeight: '100vh' }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontFamily: '"Montserrat", sans-serif',
            color: '#B0E0E6',
            margin: '0 auto',
            padding: '1rem'
          }}
        >
          Discover your listening habits
        </Typography>
        <Button
          href='/api/auth/login'
          variant="contained"
          color="primary"
          sx={{
            mt: 10,
            backgroundColor: '#6ba8bf',
            color: 'white',
            '&:hover': {
              backgroundColor: '#5a8ca0'
            }
          }}
        >
          Authorize Spotify
        </Button>
      </Box>
    </>
  )
}

export default Home