import { render, screen } from '@testing-library/react'
import { test, expect } from '@jest/globals'
import { Loader } from '../src/components/loader/Loader'

test('test component Loader', () => {
    render(<Loader />)

    const loaderElement = screen.getByText('Loading...')

    expect(loaderElement).toBeInTheDocument()
    expect(loaderElement).toHaveClass('visually-hidden')
    expect(loaderElement).not.toHaveClass('spinner-border')
})