import { render, screen } from "@testing-library/react"
import { GreetName } from "./greetName.jsx"


describe("Greet",()=>{

it("should render Hello Properly",()=>{
    render(<GreetName />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})

it("should render Hello with name Properly",()=>{
    render(<GreetName name={"vedavyas"} />)
    const textElement = screen.getByText(/hello vedavyas/i)
    expect(textElement).toBeInTheDocument()
})

})

