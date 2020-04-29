/**
 * Licensed Materials - Property of Atlas Media Group Ltd
 *
 * © Copyright Atlas Media Group Ltd. 2019 All Rights Reserved
 * Use, duplication or disclosure restricted.
 *
 * @author Matt Kent
 */

import React from 'react'
import Container from '../../../components/Container'
import { compose } from 'glamor'
import Header from '../../../components/Header'
import theme from '../../../theme'
import Particles from 'react-particles-js'

export default () => (
  <div className={compose(styles.wrapper)}>
    <Container>
      <Header />
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.7
            },
            move: {
              direction: 'right',
              speed: 0.5
            },
            size: {
              value: 1
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5
              }
            }
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: 'push'
              }
            },
            modes: {
              push: {
                particles_nb: 1
              }
            }
          },
          retina_detect: true
        }}
        style={{ position: 'absolute' }}
      />
      <Intro />
      <Projects />
    </Container>
  </div>
)

const Intro = () => (
  <div className={compose(styles.content)}>
    <h1 className={compose(styles.heading)}>Introducing CalderaMS</h1>
    <p className={compose(styles.subHeading)}>
      CalderaMS is the most up to date, intuitive and powerful library
      management solution for the 21st century. CalderaMS is aiming to
      revolutionise how we manage libraries of data and resources, one step at a
      time.
    </p>
    <LatestRelease />
  </div>
)

const LatestRelease = () => (
  <div className={compose(styles.release)}>
    <span className={compose(styles.releaseMain)}>
      Planned release date: <strong>2020</strong>
    </span>
  </div>
)

const Projects = () => (
  <div className={compose(styles.projects)}>
    <h6 className={compose(styles.projectsTitle)}>Currently in development</h6>
  </div>
)

const styles = {
  wrapper: {
    background: '#263238',
    color: 'white',
    padding: '2rem 0 4em',
    position: 'relative',
    overflow: 'hidden'
  },
  content: {
    padding: '6em 0 0',
    textAlign: 'center',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',

    [theme.breakpoint.mediumDown]: {
      width: '100%',
      padding: '4rem 0rem 0'
    }
  },
  heading: {
    color: 'white',
    fontSize: '3rem',
    [theme.breakpoint.mediumDown]: {
      fontSize: '2.5rem'
    }
  },
  subHeading: {
    fontSize: '1.25rem',
    opacity: 0.8
  },
  buttons: {
    display: 'inline-flex',
    marginTop: '1.25rem',
    alignItems: 'center'
  },
  button: {
    background: 'white',
    color: theme.color.blue,
    textDecoration: 'none',
    fontSize: '1.25rem',
    padding: '1rem 2rem',
    borderRadius: 6,
    transition: 'transform linear 120ms',
    ':hover': {
      transform: 'scale(1.025)'
    },
    ':active': {
      opacity: 0.8
    }
  },
  buttonPrimary: {
    textTransform: 'uppercase',
    fontWeight: '500'
  },
  buttonSecondary: {
    display: 'flex',
    background: 'none',
    color: 'white',
    fontSize: '1.25rem',
    border: '2px solid rgba(255,255,255,0.4)',
    marginLeft: '1rem'
  },

  release: {
    fontSize: '1rem',
    padding: '0.625rem 1rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 6,
    margin: '3rem auto 0'
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    marginRight: '0.625rem',
    backgroundColor: theme.color.green
  },
  releaseSide: {
    marginLeft: '1.25rem'
  },

  projects: {
    margin: '3rem auto 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  projectsTitle: {
    fontSize: '1rem',
    fontWeight: '300',
    color: 'rgba(255,255,255,0.75)'
  },

  projectLogos: {
    display: 'flex',
    alignSelf: 'stretch',
    margin: '1rem 0 0',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    [theme.breakpoint.mediumDown]: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  },

  projectLogo: {
    [theme.breakpoint.smallOnly]: {
      width: '28%',
      margin: '2.5%'
    },
    [theme.breakpoint.mediumUp]: {
      width: '20%',
      margin: '2.5%'
    }
  }
}
