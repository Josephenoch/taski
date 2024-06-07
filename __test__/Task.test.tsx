import {render, screen} from "@testing-library/react"
import { Task } from "@/components/secondary"

describe("Task", ()=> {
  it("should have title", ()=>{
    render(<Task content="Hello" title="Nope" completed={true} id="1" userId="2"/>)
    const myElem = screen.getByText("Hello")
    expect(myElem).toBeInTheDocument()
  })

  it("should not show options if completed", ()=>{
    render(<Task content="Hello" title="Nope" completed={true} id="1" userId="2"/>)
    const myElem = screen.queryByTestId("uncompleted")
    expect(myElem).not.toBeInTheDocument()
  })


})
