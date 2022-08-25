import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import { useStyles } from './headerStyles'
import Navbar from './navbar'
import Typed from 'react-typed'
// import { DecoratorLabel } from '../aCommon/commonComponent'
import DrawerComponent from './drawer'

export default function HeaderComponent() {
  const classes = useStyles()

  // for navbar
  const navLinks = [
    { id: 'Home', label: 'Home' },
    { id: 'About', label: 'About' },
    { id: 'Portfolio', label: 'Portfolio' },
    { id: 'Contact', label: 'Contact' },
  ]

  //for drawer .
  const [initialState, setInitialState] = useState(false)
  const handleDrawerOpen = () => {
    setInitialState(!initialState)
  }

  return (
    <div className={classes.header} id='Home'>
      <div className={classes.headerWrapper}>
        <Navbar handleDrawerOpen={handleDrawerOpen} navLinks={navLinks} />
        <DrawerComponent
          navLinks={navLinks}
          initialState={initialState}
          handleDrawerOpen={handleDrawerOpen}
        />
        <Container className={classes.displayContainer}>
          <h1 className={classes.displayTextTitle}>
            Hello my name is Ashitosh <br />
            I'm a <span style={{ paddingRight: '5px' }}></span>
            <Typed
              strings={['Front-end developer']}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h1>
        </Container>
      </div>
    </div>
  )
}
