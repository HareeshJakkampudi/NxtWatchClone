import styled from 'styled-components'

import HeaderOptions from '../HeaderOptions'

const Header = () => (
  <NavBarHeader>
    <LogoPane>
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="NXTWATCH"
      />
    </LogoPane>
    <HeaderOptions />
  </NavBarHeader>
)

export default Header

const NavBarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background-color: #ffffff;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   border-bottom: 1px solid #333;
  z-index: 10000;

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
  }
`
const LogoPane = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
