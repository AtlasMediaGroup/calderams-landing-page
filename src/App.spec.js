import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import HomePage from './pages'

describe('App', () => {
  it('renders the <Homepage /> component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(HomePage).length).toEqual(1)
  })
})
