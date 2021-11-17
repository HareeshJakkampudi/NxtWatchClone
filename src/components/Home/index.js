import Header from '../Header'
import Sidebar from '../Sidebar.js'

const Home = () => (
  <>
    <Header />
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '60px',
      }}
    >
      <Sidebar />
      <h1 style={{marginLeft: '300px'}}>Hello</h1>
    </div>
  </>
)
export default Home
