import { render, screen } from '@testing-library/react'
import App from './App'

describe("App", () => {
  it("Meu teste", () => {
    render(<App />)
    screen.findByText("testando")
  })
})