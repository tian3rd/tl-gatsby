import React from "react"
import styled from "styled-components"

function MockupAnimation() {
  return (
    <Wrappper>
      {/* mockups for future real pics replacement */}
      <div className="mockup1"></div>
    </Wrappper>
  )
}

export default MockupAnimation

const Wrappper = styled.div`
  position: relative;
  background: url("/images/animations/computer-herosection.svg");
  .mockup1 {
  }
  & {
    transition: 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover {
    filter: brightness(130%);
  }
`
