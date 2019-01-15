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
import TwitterButton from './TwitterButton'

describe('TwitterButton', () => {
  it('renders correctly', () => {
    shallow(<TwitterButton />)
  })

  it('inner text rendered successfully', () => {
    const wrapper = shallow(<TwitterButton href="testingHref" />)
    expect(wrapper.text()).toEqual('Follow CalderaMS')
  })

  it('renders valid href prop', () => {
    const wrapper = mount(<TwitterButton href="testHref" />)
    expect(wrapper.prop('href')).toEqual('testHref')
  })
})
