import React, { useState, useRef } from 'react'
import { Box, Container, Grid, Hidden } from '@material-ui/core'
import ScrollAnimation from 'react-animate-on-scroll'
import emailjs from '@emailjs/browser'
import PlaceIcon from '@material-ui/icons/Place'
import EmailIcon from '@material-ui/icons/Email'
import CallIcon from '@material-ui/icons/Call'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { useStyles } from './bodyStyles'
import {
  RenderSectionHeading,
  RenderSubmitButton,
} from '../formCommon/formComponent'
import CustomizedInputs from '../formCommon/FormText'
import contactImage from '../../images/Contactus.jpg'

export default function ContactUs() {
  const classes = useStyles()

  const [state, setState] = useState({
    data: {
      firstName: '',
      email: '',
      messages: '',
    },
    errors: {},
  })

  const handleOnChange = ({ target }) => {
    const { data, errors } = state

    target.value.length <= 3
      ? (errors[target.name] = `${target.name} have at least 3 letter`)
      : (errors[target.name] = '')

    data[target.name] = target.value
    setState({ data, errors })
  }
  const form = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_hhvkv5v', form.current, '_oE-UyMZh1i0VBa0t')
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
    //post data via api call
  }

  return (
    <Box className={classes.section} id='Contact'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth='lg'>
          <Grid container direction='row' spacing={2}>
            <Grid item sm={12} md={5}>
              <Box component={Hidden} smDown>
                <img
                  src={contactImage}
                  alt={'about'}
                  className={classes.contactImg}
                />
              </Box>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: '#0097a7' }}>
                      <PlaceIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary='Address'
                    secondary='Mangalore,Karnataka'
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: '#0097a7' }}>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary='Email'
                    secondary='kambleashitosh07@gmail.com'
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: '#0097a7' }}>
                      <CallIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Contact' secondary='+91-9513692212' />
                </ListItem>
              </List>
            </Grid>

            <Grid item sm={12} md={7}>
              {RenderSectionHeading({
                SmallText: 'Contact Us',
                Title: 'Email me',
                Description: 'Feel free to contact me for any Queries',
              })}

              <Box className={classes.cardLists}>
                <form ref={form} onSubmit={handleSubmit}>
                  <Grid container justify='center'>
                    <Grid item xs={12} className={classes.gridItem}>
                      <CustomizedInputs
                        label='First Name'
                        name='firstName'
                        state={state}
                        onChange={handleOnChange}
                      />
                    </Grid>

                    <Grid item xs={12} className={classes.gridItem}>
                      <CustomizedInputs
                        label='Email@Example.com'
                        name='email'
                        state={state}
                        onChange={handleOnChange}
                      />
                    </Grid>

                    <Grid item xs={12} className={classes.gridItem}>
                      <CustomizedInputs
                        label='Your Messages Here'
                        name='messages'
                        state={state}
                        onChange={handleOnChange}
                        multiline
                        rows={6}
                      />
                    </Grid>

                    <Grid item xs={8} sm={6}>
                      {RenderSubmitButton({ label: 'submit' })}
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  )
}
