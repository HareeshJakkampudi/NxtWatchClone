import styled from 'styled-components'
import {FiSun} from 'react-icons/fi'

const HeaderOptions = props => {
  const {dark} = props
  return (
    <Nav>
      <NavContainer>
        <NavItemsList>
          <NavItem>
            <StyledFiSun />
          </NavItem>
          <NavItem>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
          </NavItem>
          <NavItem>
            <LogoutButton type="button">Logout</LogoutButton>
          </NavItem>
        </NavItemsList>
      </NavContainer>
    </Nav>
  )
}
export default HeaderOptions

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NavContainer = styled.div``

const NavItemsList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`
const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin: 4px 8px;
  cursor: pointer;
`

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
`

const LogoutButton = styled.button`
  color: #3b82f6;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid #3b82f6;
  border-radius: 4px;
  padding: 6px 18px;
  outline: none;
  cursor: pointer;

  //   @media screen and (max-width: 768px) {
  //     display: none;
  //   }
`
const StyledFiSun = styled(FiSun)`
  font-size: 24px;
`
