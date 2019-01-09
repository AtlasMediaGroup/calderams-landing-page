import React, { Component } from 'react'
import { compose } from 'glamor'
// import fetch from 'unfetch'
import logo from '../images/caldera-white.svg'
import theme from '../theme'

export default class Header extends Component {
  render() {
    return (
      <header className={compose(styles.navBar)}>
        <div
          className={compose(
            styles.navBarSide,
            styles.navBarSideLeft
          )}
        >
          <img
            src={logo}
            className={compose(styles.logo)}
            alt="CalderaMS"
            title="CalderaMS"
          />

          <span className={compose(styles.logoText)}>CalderaMS</span>
        </div>
      </header>
    )
  }
}

const styles = {
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    height: '3rem',
    [theme.breakpoint.smallOnly]: {
      flexWrap: 'wrap',
      height: 'auto'
    }
  },
  navBarSide: {
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 0
  },
  navBarSideLeft: {
    left: 0,
    [theme.breakpoint.mediumDown]: {
      left: '2rem'
    }
  },
  navBarSideRight: {
    right: 0,
    [theme.breakpoint.mediumDown]: {
      right: '2rem'
    }
  },
  navBarCenter: {
    flex: 1,
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoint.smallOnly]: {
      height: '3.75rem',
      alignItems: 'flex-start',
      marginTop: '4rem',
      flexWrap: 'noWrap',
      overflowX: 'scroll',
      overflowY: 'hidden',
      marginLeft: '-2rem',
      marginRight: '-2rem',
      padding: '0 2rem',
      justifyContent: 'flex-start',
      webkitOverflowScrolling: 'touch'
    }
  },
  navItem: {
    margin: '0 0.625em',
    padding: 0,
    lineHeight: 1.4,

    [theme.breakpoint.smallOnly]: {
      margin: '0 1.25rem 0 0',
      fontSize: '1.15rem'
    }
  },
  navItemLink: {
    color: 'inherit',
    opacity: 0.75,
    textDecoration: 'none',
    whiteSpace: 'noWrap',
    ':hover': {
      opacity: 1
    }
  },
  logo: {
    height: '3rem',
    margin: '0 1rem 0 0',
    paddingLeft: '10px'
  },
  logoText: {
    fontSize: '1.3em'
  }
}
