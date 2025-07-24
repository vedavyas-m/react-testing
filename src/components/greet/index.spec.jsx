import { render, screen } from "@testing-library/react"
import { Greet } from "."



it("should render Hello World Properly(this is test from .spec extension)",()=>{
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})