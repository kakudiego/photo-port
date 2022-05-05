// __tests__/Contact.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'

afterEach(cleanup)

describe('Contact component', () => {
  it('renders', () => {
    render(<Contact />);
  });

  it('renders1', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  })
})


it('renders2', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})

it('renders3', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('button')).toHaveTextContent('Submit')
})