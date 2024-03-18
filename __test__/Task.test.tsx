import {render, screen} from "@testing-library/react"
import { Task } from "../components/secondary"

it("should not visible at first", ()=>{
  render(<Task content="Hello" title="Nope" completed={true} id="1" userId="2"/>)
  const myElem = screen.getByText("Nope")
  expect(myElem).toBeInTheDocument()
})