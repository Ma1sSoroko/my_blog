import { render, screen } from '@testing-library/react'
import { test, expect } from '@jest/globals'
import { Container } from '../src/components/container/Container'

test('test component Container', () => {
    const content = 'Test container'

    render(<Container>{content}</Container>)

    const containerElement = screen.getByText(content)
    
    expect(containerElement).toBeInTheDocument()
    expect(containerElement).toHaveTextContent(content)
    expect(containerElement).toHaveClass('container-fluid')
})