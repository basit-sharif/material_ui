"use client"
import { AppBar, Autocomplete, Box, Button, Card, CardMedia, Slider, TextField, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Abdul Basit
          </Typography>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="#">
            Blog
          </Button>
          <Button color="inherit" component={Link} href="#">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundColor: '#f0f0f0',
          padding: '60px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to My Abdul Basit Website
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Give us a Star <Link target='_blank' href={"https://github.com/basitgggg"}>Github</Link>
        </Typography>
        <Box justifyContent={"center"} border={"4px"} display={"flex"} gap={"8px"} sx={{ marginTop: '20px' }}>
          <Button color="primary" variant="contained" component={Link} href="#">
            Explore Blog
          </Button>
          <Button color="secondary" variant="contained" component={Link} href="#">
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '40px' }}>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            I am a passionate Full Stack Developer
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: 400 }}>
            <Image width={"300"} height="300" src={"https://avatars.githubusercontent.com/u/112763949?v=4"} alt="Sample Image" />
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
