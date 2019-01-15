/**
 * Licensed Materials - Property of Atlas Media Group Ltd
 *
 * © Copyright Atlas Media Group Ltd. 2019 All Rights Reserved
 * Use, duplication or disclosure restricted.
 *
 * @author Matt Kent
 */

import React from 'react'
import { shallow, mount } from 'enzyme'
import MakeFeatures from './MakeFeatures'

describe('MakeFeatures', () => {
  it('shallow renders', () => {
    shallow(<MakeFeatures />)
  })

  it('fully renders', () => {
    const wrapper = mount(<MakeFeatures />)
    wrapper.unmount()
  })
})
