import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { menuData } from "../../data/MenuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip"

export default function Header() {
  return (
    <Wrapper>
      {/* add home link to logo */}
      <Link to="/">
        <Logo src="/images/logos/ANFFlogo.svg" alt="logo" />
      </Link>
      <MenuWrapper>
        {menuData.map((item, index) => (
          // every list map should have a key
          <MenuButton item={item} key={index} />
        ))}
      </MenuWrapper>
      <MenuTooltip />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* absolute to parent (root in this case) */
  position: absolute;
  top: 50px;
  display: grid;
  /* first 45px is for logo */
  grid-template-columns: 45px auto;
  /* set width to take up whole space */
  width: 100%;
  /* space-between has no left/right (far-ends) space, vs space-around. see css-tricks.com */
  justify-content: space-between;
  padding: 0 30px;
  /* vertical center items */
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  /* use repeat function wrt menuData array length */
  grid-template-columns: repeat(${menuData.length}, auto);
  /* also vertical center menu links */
  align-items: center;
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
