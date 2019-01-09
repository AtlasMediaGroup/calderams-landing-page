/**
 * Licensed Materials - Property of Atlas Media Group Ltd
 *
 * © Copyright Atlas Media Group Ltd. 2019 All Rights Reserved
 * Use, duplication or disclosure restricted.
 *
 * @author Matt Kent
 */

import React, { Component } from 'react'
import { compose } from 'glamor'
import Container from '../../../components/Container'
import TwitterButton from '../../../components/TwitterButton'
import { color } from '../../../theme'

export default class CommunityResponse extends Component {
  render() {
    return (
      <div className={compose(styles.wrap)}>
        <Container>
          <h2 className={compose(styles.heading)}>Stay in the loop</h2>
          <TwitterButton href="https://twitter.com/calderams" />
        </Container>
      </div>
    )
  }
}

const styles = {
  wrap: {
    padding: '4rem 0',
    textAlign: 'center'
  },
  heading: {
    fontSize: '2rem'
  },
  subheading: {
    fontSize: '1.25rem',
    color: color.gray50
  },
  tweets: {
    marginTop: '2rem'
  }
}
