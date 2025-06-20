import { render, screen } from '@testing-library/react'
import { test, expect } from '@jest/globals'
import { Title } from '../src/components/title/Title'

test('test component Title', () => {
    const content = 'Test title'

    render(<Title>{content}</Title>)

    const titleElement = screen.getByText(content)

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent(content)
    expect(titleElement).toHaveClass('fw-bold')
})
