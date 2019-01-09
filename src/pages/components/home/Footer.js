/**
 * Licensed Materials - Property of Atlas Media Group Ltd
 *
 * © Copyright Atlas Media Group Ltd. 2019 All Rights Reserved
 * Use, duplication or disclosure restricted.
 *
 * @author Matt Kent
 */

import React, { Component } from 'react'
import Container from '../../../components/Container'
import { compose } from 'glamor'

export default class ValueProps extends Component {
  render() {
    return (
      <div className={compose(styles.background)}>
        <Container>
          <p>
            <br />
            CalderaMS is a brand of Atlas Media Group Ltd, company no 10639296
          </p>
        </Container>
      </div>
    )
  }
}

const styles = {
  list_links: {
    listStyle: 'none',
    marginLeft: '0',
    marginBottom: '0'
  },
  list_links_item: {
    display: 'inline-block',
    paddingLeft: '0.625rem',
    paddingRight: '0.625rem'
  },
  list_links_anchor: {
    textDecoration: 'none',
    color: 'darkorange',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  background: {
    backgroundColor: '#263238',
    paddingTop: '3rem',
    paddingBottom: '3rem',
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: '0.9rem'
  }
}
