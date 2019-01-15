/**
 * Container component test
 * CalderaMS Landing page
 *
 * @license ATLASCommercial
 */

import React from 'react'
import { shallow } from 'enzyme'
import Container from './Container'

describe('Container', () => {
  it('renders correctly', () => {
    shallow(<Container />)
  })

  it('sets size to number to access ternary branch', () => {
    shallow(<Container width={5} />)
  })
})
