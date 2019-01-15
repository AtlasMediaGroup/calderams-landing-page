import React from 'react'
import { shallow, mount } from 'enzyme'
import { Row, Col } from './index'

describe('Grid Index', () => {
  it('shallow renders row', () => {
    shallow(<Row />)
  })

  it('shallow renders col', () => {
    const props = {
      component: 'div',
      small: '5',
      medium: '',
      large: ''
    }
    const wrapper = mount(<Col {...props} />)
    expect(wrapper.props()).toEqual(props)
  })
})
