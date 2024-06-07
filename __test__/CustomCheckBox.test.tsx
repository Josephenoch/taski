import {render, screen, fireEvent} from "@testing-library/react"
import { CustomCheckBox } from "@/components/lib"

describe("CustomCheckBox", ()=> {
  it("should have checked image if checked", ()=>{
    render(<CustomCheckBox onClick={()=>{}} selected={true}/>)
    const myElem = screen.queryByTestId("checked")
    expect(myElem).toBeInTheDocument()
  })
  
  it("should not have checked image if not checked", ()=>{
    render(<CustomCheckBox onClick={()=>{}} selected={false}/>)
    const myElem = screen.queryByTestId("checked")
    expect(myElem).not.toBeInTheDocument()
  })

  it("should state change on click", ()=>{
    // when the check item is clicked, should the state change
    let selected = true
    const onClick = () => {
      selected = !selected
    }
    const Elem = <CustomCheckBox onClick={onClick} selected={selected}/>
    render(Elem)
    const myElem = screen.getByTestId("checked")
    fireEvent.click(myElem)
    expect(myElem).not.toBeInTheDocument()

  })
 


})