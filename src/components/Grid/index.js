import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import widthMap from './widths'
import theme from '../../theme'
import { compose } from 'glamor'

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
const defaultProps = {
  component: 'div'
}

// Row

export function Row({
  children,
  component: Tag,
  small,
  medium,
  large,
  ...props
}) {
  const childProps = { small, medium, large }

  return (
    <Tag className={compose(styles.row)} {...props}>
      {small || medium || large
        ? Children.map(children, c => cloneElement(c, childProps))
        : children}
    </Tag>
  )
}

const styles = {
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-1em',
    marginRight: '-1em'
  }
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps

// Col

export function Col({ component: Tag, small, medium, large, ...props }) {
  const tagStyles = {
    paddingLeft: '1em',
    paddingRight: '1em',
    width: small ? widthMap[small] : '100%',

    [theme.breakpoint.mediumUp]: {
      width: widthMap[medium]
    },
    [theme.breakpoint.largeUp]: {
      width: widthMap[large]
    }
  }

  return <Tag className={compose(tagStyles)} {...props} />
}

Col.propTypes = propTypes
Col.defaultProps = defaultProps

export default { Col, Row }
