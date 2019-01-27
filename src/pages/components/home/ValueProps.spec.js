import React from 'react'
import { shallow, mount } from 'enzyme'
import ValueProps from './ValueProps'

describe('ValueProps', () => {
  it('shallow renders', () => {
    shallow(<ValueProps />)
  })

  it('fully renders', () => {
    const wrapper = mount(<ValueProps />)
    wrapper.unmount()
  })
})
