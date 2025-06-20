import { render, screen } from '@testing-library/react'
import { test, expect } from '@jest/globals'
import { Main } from '../src/components/main/Main'

test('test component Main', () => {
    render(<Main>Test</Main>)

    const mainElement = screen.getByText('Test')

    expect(mainElement).toBeInTheDocument()
    expect(mainElement).toHaveClass('flex-grow-1')
    expect(mainElement).not.toHaveClass('main')
})