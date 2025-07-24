import { render, screen } from "@testing-library/react"
import { Greet } from "../components/greet"




it("should render Hello World Properly(this is test from inside __tests__ folder)",()=>{
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})