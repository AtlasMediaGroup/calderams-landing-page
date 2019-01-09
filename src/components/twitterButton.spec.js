/**
 * Licensed Materials - Property of Atlas Media Group Ltd
 *
 * © Copyright Atlas Media Group Ltd. 2019 All Rights Reserved
 * Use, duplication or disclosure restricted.
 *
 * @author Matt Kent
 */

import React from 'react'
import renderer from 'react-test-renderer'
import TwitterButton from './TwitterButton'

describe('twitter button component', () => {
  it('renders correctly', () => {
    const domTree = renderer.create(<TwitterButton />).toJSON()
    expect(domTree).toMatchSnapshot()
  })
})
