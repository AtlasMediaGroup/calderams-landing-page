/**
 * Licensed Materials - Property of Atlas Media Group Ltd
 *
 * © Copyright Atlas Media Group Ltd. 2019 All Rights Reserved
 * Use, duplication or disclosure restricted.
 *
 * @author Matt Kent
 */

import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Hero from './components/home/Hero'
import ValueProps from './components/home/ValueProps'
import CommunityResponse from './components/home/CommunityResponse'
import Footer from './components/home/Footer'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet defaultTitle={'CalderaMS'} titleTemplate={'%s | CalderaMS'}>
          <meta name="twitter:site" content="@calderams" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="CalderaMS" />
          <html lang="en" />
        </Helmet>
        <Hero />
        <ValueProps />
        <CommunityResponse />
        <Footer />
      </div>
    )
  }
}
