import styled from 'styled-components'

const NotFound = () => (
  <Container>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="404"
    />
    <ContentBox>
      <Title>Page Not Found</Title>
      <Desc>We are sorry, the page you requested colud not be found</Desc>
    </ContentBox>
  </Container>
)
export default NotFound

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Image = styled.img`
  width: 90%;
  max-width: 550px;
  height: auto;
`
const Title = styled.h1`
  color: ##0f0f0f;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
const Desc = styled.p`
  color: #1e293b;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
const ContentBox = styled.div`
  width: 80%;
  padding: 8px 12px;
  margin-top: 24px;
  text-align: center;
`
