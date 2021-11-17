import styled from 'styled-components'
import menuItems from './sidebarmenuItems'
import SidebarOptions from './SidebarOptions'

const Sidebar = () => (
  <SidebarContainer>
    <SidebarMenuList>
      {menuItems.map(item => (
        <SidebarOptions key={item.id} item={item} />
      ))}
    </SidebarMenuList>
  </SidebarContainer>
)

export default Sidebar

// const Height = styled.css`
//   height: calc(100% - 60px);
// `

const SidebarContainer = styled.div`
  position: fixed;
  width: 300px;
  height: calc(100% - 60px);
  background-color: #fff;
  z-index: 100;
  display: flex;
  box-shadow: 5px 0px 20px rgba(38, 38, 38, 0.05);
`

const SidebarMenuList = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 64px 0;
`
