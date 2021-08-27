import { cleanup, render, fireEvent } from '@testing-library/react'

import { Button } from './'

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  test('matching button label', () => {
    const label = 'label'
    const { container } = render(<Button>{label}</Button>)
    expect(container).toHaveTextContent(`${label}Hello Vite!!`)
  })

  test('onClick', () => {
    const handleClick = jest.fn()
    const label = 'label'
    const { getByText } = render(<Button onClick={handleClick}>{label}</Button>)

    fireEvent.click(getByText(`${label}Hello Vite!!`))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
