/**
 * Container component test
 * CalderaMS Landing page
 * 
 * @license ATLASCommercial
 */

import React from 'react'
import renderer from 'react-test-renderer'
import Container from './Container'

describe('container component', () => {
    it('renders correctly', () => {
        const domTree = renderer.create(<Container />).toJSON()
        expect(domTree).toMatchSnapshot()
    })
})