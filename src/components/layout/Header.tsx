import React from "react"
import styled from "styled-components"
import { menuData } from "../data/MenuData"

export default function Header() {
  return (
    <Wrapper>
      <Logo src="/images/logos/ANFFlogo.svg" alt="logo" />
      <MenuWrapper>
        {menuData.map((item, index) => (
          <a href={item.link} key={index}>
            <MenuItem>
              <img src={item.icon} alt={item.title} />
              {item.title}
            </MenuItem>
          </a>
        ))}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  display: grid;
  grid-template-columns: 45px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(5, auto);
  align-items: center;
`

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.9);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-in-out;
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  }
`

const Logo = styled.img`
  width: 44px;
  height: 61.84px;
  left: 0px;
  top: 0px;

  /* drop shadow combo 1 */

  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.15));
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
`
