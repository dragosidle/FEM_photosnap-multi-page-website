import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>help</li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar

const StyledNavbar = styled.nav`
  position: absolute;
  height: 50px;
  width: 100%;
  top: 0;
  background-color: #c3c3c3;
`
