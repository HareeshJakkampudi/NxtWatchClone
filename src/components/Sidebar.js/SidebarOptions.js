import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'

const SidebarOptions = ({item}) => {
  const {title, icon, id, path} = item

  const [activeId, setActiveId] = useState(1)
  //   console.log(activeId)
  const handleClick = () => {
    setActiveId(prevState => prevState + 1)
  }
  console.log(`SidebarOptions rerender ${activeId}`)
  return (
    <MenuItem key={id} onClick={handleClick}>
      <StyledLink to={path}>
        <StyledIcon>{icon}</StyledIcon>
        <MenuTitle style={{marginLeft: '18px'}}>{title}</MenuTitle>
      </StyledLink>
    </MenuItem>
    // <StyledLink to={path}>
    //   <MenuItem key={id} onClick={handleClick}>
    //     <StyledIcon>{icon}</StyledIcon>
    //     <MenuTitle style={{marginLeft: '18px'}}>{title}</MenuTitle>
    //   </MenuItem>
    // </StyledLink>
  )
}

export default SidebarOptions

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin: 4px 0;
  padding: 16px 24px;
  border-radius: 4px;
  //   ${props => console.log(props)}
`
const StyledLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #0f0f0f;
`
const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
`
const MenuTitle = styled.p`
  font-size: 16px;
`
