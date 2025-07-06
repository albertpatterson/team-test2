import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders Vite + React heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: /vite \+ reactasdfsadf/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders initial count of 0', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    fireEvent.click(button)
    
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  it('shows edit instruction text', () => {
    render(<App />)
    const editText = screen.getByText((content, element) => {
      return element?.textContent === 'Edit src/App.jsx and save to test HMR'
    })
    expect(editText).toBeInTheDocument()
  })
})
