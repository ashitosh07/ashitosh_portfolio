import React from 'react'
import { Box, Button, Container, Grid, Hidden } from '@material-ui/core'
import { useStyles } from './bodyStyles'
import { CardMedia, RenderSectionHeading } from '../formCommon/formComponent'
import { Theme } from '../Theme'
import aboutImage from '../../images/Aboutus.jpg'
import WebIcon from '@material-ui/icons/Web'
import SchoolIcon from '@material-ui/icons/School'
import ScrollAnimation from 'react-animate-on-scroll'
import Avatar from '@mui/material/Avatar'
export default function AboutUs() {
  const classes = useStyles()

  const skills = [
    {
      icon: (
        <Avatar style={{ backgroundColor: '#0097a7' }}>
          <WebIcon />
        </Avatar>
      ),
      title: 'Skills',
      desc: `HTML,CSS,JAVASCRIPT,REACT JS`,
    },
    {
      icon: (
        <Avatar style={{ backgroundColor: '#0097a7' }}>
          <SchoolIcon />
        </Avatar>
      ),
      title: 'Education',
      desc: 'Bacheclor of Science',
    },
  ]

  return (
    <Box className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth='xl'>
          <Grid container direction='row' spacing={2}>
            <Grid item sm={12} md={5}>
              <Box component={Hidden} smDown>
                <img
                  src={aboutImage}
                  alt={'about'}
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item sm={12} md={7}>
              {RenderSectionHeading({
                SmallText: 'ABOUT US',
                Title: "Hello I'm Ashitosh Kamble",
                Description:
                  "I'm from Mangalore and I have a undergraduate degree from St Aloysius College Mangalore,I'm a self-taught Front-end Developer and I have an outstanding ability to learn anything fast",
              })}
              <br />
              <Box className={classes.cardLists}>
                <Grid container spacing={1}>
                  {skills.map((item, i) => (
                    <Grid
                      key={i}
                      item
                      xs={12}
                      sm={6}
                      style={{ margin: '10px 0px' }}
                    >
                      {CardMedia({
                        Icon: item.icon,
                        Title: item.title,
                        Desc: item.desc,
                      })}
                    </Grid>
                  ))}
                  <a
                    href='https://drive.google.com/file/d/1MWMpdXH-Rv1iATuOVBP_F6-aRdpk3fXf/view?usp=drivesdk'
                    style={{
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    <Button
                      variant='contained'
                      color='primary'
                      size='large'
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: Theme.colors.base1,
                        marginTop: '50px',
                        marginLeft: '20px',
                      }}
                    >
                      Download CV
                    </Button>
                  </a>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  )
}
