import React from 'react'
import { mount } from './testkit/dom-test'
import Joke from './joke'

test('It tells a joke', () => {
  const joke = mount(<Joke />)

  expect(joke.text()).toBe('Not a funny joke')
})
