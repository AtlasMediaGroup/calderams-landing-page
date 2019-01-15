import React from 'react'
import { shallow, mount } from 'enzyme'
import Hero from './Hero'

describe('Hero', () => {
  it('shallow renders', () => {
    shallow(<Hero />)
  })

  it('fully renders', () => {
    const wrapper = mount(<Hero />)
    wrapper.unmount()
  })
})
