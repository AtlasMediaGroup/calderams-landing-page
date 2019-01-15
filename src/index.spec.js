/**
 * Licensed Materials - Property of Atlas Media Group Ltd
 *
 * © Copyright Atlas Media Group Ltd. 2019 All Rights Reserved
 * Use, duplication or disclosure restricted.
 *
 * @author Matt Kent
 */

import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('Index', () => {
  it('ReactDOM successfully called', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    document.getElementById = id => id === 'root' && div
    expect(ReactDOM.render).toHaveBeenCalled()
  })
})
