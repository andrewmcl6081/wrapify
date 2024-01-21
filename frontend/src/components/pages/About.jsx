import { Container, Typography, Box } from '@mui/material'
import Album from './Album'

const About = () => {

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='start'
        style={{ minHeight: '100vh'}}
      >
        <Container maxWidth='md'>
          <Typography
            variant='h2'
            align='center'
            gutterBottom
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              color: '#B0E0E6',
              margin: '0 auto',
              padding: '1rem'
            }}
          >
            What is Wrapify?
          </Typography>
          <Typography
            variant='h5'
            paragraph
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              color: '#B0E0E6',
              margin: '0 auto',
              padding: '1 rem'
            }}
          >
            Wrapify is an innovative music analytics application designed for music enthusiasts and casual
            listeners. Our application is a unique tool that gathers your top songs and artists over different
            periods - a week, a month, or an entire year. This feature enables you to see how your music preferences
            evolve over time, revealing insights into your personal discography.
          </Typography>
        </Container>
      </Box>
      <Album />    
    </>
  )
}

export default About