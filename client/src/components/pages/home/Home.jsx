import './Home.css'
import{Header,Posts,Sidebar} from '../../../components'

const Home = () => {
  return (
      <>
      <Header />
    <div className="blog1__Home">
      <Posts/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Home
