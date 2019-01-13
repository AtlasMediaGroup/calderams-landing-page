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
import { Col, Row } from '../../../components/Grid'
import { compose } from 'glamor'
import theme from '../../../theme'

import {
  EntypoShuffle,
  EntypoLightBulb,
  EntypoPencil,
  EntypoUsers,
  EntypoPaperPlane,
  EntypoLock,
  EntypoOpenBook,
  EntypoKeyboard
} from 'react-entypo'

const ValueProp = ({ icon, text, title, text2, marginTop }) => {
  return (
    <div
      {...compose(
        styles.base,
        { marginTop }
      )}
    >
      <i {...compose(styles.icon_inner)}>{icon}</i>
      <div {...compose(styles.content)}>
        <h3 {...compose(styles.title)}>{title}</h3>
        <p {...compose(styles.text)}>{text}</p>
        {text2 ? <p {...compose(styles.text)}>{text2}</p> : null}
      </div>
    </div>
  )
}

ValueProp.defaultProps = {
  marginTop: '3em'
}

export default class ValueProps extends Component {
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
            <Col>
              <ValueProp
                title="Secure Login &amp; API Authentication"
                text="Out of the box secure user login and registration capabilities, with APIs authenticated with JWT."
                icon={<EntypoLock style={styles.icon} />}
              />
            </Col>
            <Col>
              <ValueProp
                title="Multi-resource Support"
                text="Support for managing everything from books, video, audio and text files. All included out of the box with seemless integration."
                icon={<EntypoOpenBook style={styles.icon} />}
              />
            </Col>
            <Col>
              <ValueProp
                title="Barcode Integration"
                text="Add books via the scan of a barcode. CalderaMS aims to provide effortless management with optimum flexibility."
                icon={<EntypoKeyboard style={styles.icon} />}
              />
            </Col>
            <Col>
              <ValueProp
                title="Modern &amp; Intuitive UI"
                text="Using modern technologies, CalderaMS provides a stunning user interface for a hassle free, enjoyable experience."
                icon={<EntypoLightBulb style={styles.icon} />}
              />
            </Col>
          </Row>
          <Row medium="1/2" large="1/4">
            <Col>
              <ValueProp
                title="Hassle free editing"
                text="Keep things simple. Managing your resources shouldn't be a struggle. CalderaMS manages all your resources in one place, keeping you in complete control."
                icon={<EntypoPencil style={styles.icon} />}
              />
            </Col>
            <Col>
              <ValueProp
                title="ISBN Catalogue Integration"
                text="Auto-complete book searches with millions of book records from ISBN. Including ratings, description and book covers."
                icon={<EntypoShuffle style={styles.icon} />}
              />
            </Col>
            <Col>
              <ValueProp
                title="Powerful User &amp; Role Permissions"
                text="Control every aspect of your library, from user roles, access permissions and permission levels."
                icon={<EntypoUsers style={styles.icon} />}
              />
            </Col>
            <Col>
              <ValueProp
                title="In-Built Email Processing"
                text="Send emails to your users, either manually or automatically based off pre-defined triggers. Managing your library and its users is a cinch."
                icon={<EntypoPaperPlane style={styles.icon} />}
              />
            </Col>
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
