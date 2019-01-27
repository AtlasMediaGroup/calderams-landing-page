/**
 * Licensed Materials - Property of Atlas Media Group Ltd
 *
 * © Copyright Atlas Media Group Ltd. 2019 All Rights Reserved
 * Use, duplication or disclosure restricted.
 *
 * @author Matt Kent
 */

import React from 'react'
import { Col, Row } from './Grid'
import { compose } from 'glamor'
import confirmedFeatures from '../confirmed-features.json'
import theme from '../theme'
import Container from './Container'
import * as Entypo from 'react-entypo-icons'
import ValueProp from './ValueProps'

export default class MakeFeatures extends React.Component {
  makeGrid = () => {
    let features = []
    for (
      let i = 0;
      i <= Object.keys(confirmedFeatures.features).length - 1;
      i++
    ) {
      let FeatureIcon = Entypo[confirmedFeatures.features[i].icon]
      features.push(
        <Col key={i}>
          <ValueProp
            title={confirmedFeatures.features[i].title}
            text={confirmedFeatures.features[i].text}
            icon={<FeatureIcon style={styles.icon} />}
          />
        </Col>
      )
    }
    return features
  }

  render() {
    return (
      <div className={compose(styles.wrap)}>
        <Container>
          <div className={compose(styles.preamble)}>
            <h2 className={compose(styles.heading)}>
              Confirmed Release Features
            </h2>
            <p className={compose(styles.subheading)}>
              Below are the list of confirmed features that will be included in
              the software upon initial release.
            </p>
          </div>
          <Row medium="1/2" large="1/4">
            {this.makeGrid()}
          </Row>
          <div className={compose(styles.announceBottom)}>
            <strong>More will be announced soon...</strong>
          </div>
        </Container>
      </div>
    )
  }
}

const styles = {
  wrap: {
    padding: '4rem 0',
    borderBottom: `1px solid ${theme.color.gray05}`
  },
  announceBottom: {
    paddingTop: '50px',
    textAlign: 'center !important'
  },
  icon: {
    width: '42px',
    height: '42px',
    fill: 'darkorange'
  },
  preamble: {
    textAlign: 'center'
  },
  heading: {
    fontSize: '2em'
  },
  subheading: {
    fontSize: '1.25em',
    color: theme.color.gray50
  },
  base: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1
  },
  title: {
    color: 'inherit',
    margin: '1.25rem 0 0'
  },
  text: {
    margin: '1rem 0 0'
  }
}
