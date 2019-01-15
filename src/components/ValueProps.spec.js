import React from 'react'
import { shallow, mount } from 'enzyme'
import ValueProp from './ValueProps'

describe('ValueProps', () => {
  it('shallow renders', () => {
    shallow(<ValueProp />)
  })

  it('modifies text2', () => {
    const props = {
      icon: 'EntypoPaperPlane',
      text: 'This is some text',
      title: 'This is a title',
      text2: 'This is text2',
      marginTop: '5px'
    }
    const wrapper = mount(<ValueProp {...props} />)
    expect(wrapper.props()).toEqual(props)
    wrapper.unmount()
  })
})
