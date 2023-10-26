import './App.css'
import { useConnectSocket } from './hooks/useConnectSocket'
import { Footer } from './widgets/Footer/Footer'
import { Header } from './widgets/Header/Header'

function App() {

  // const {data} = useConnectSocket();

  return (
    <div className='app'>
      <Header/>
      {/* <div>{data}</div> */}
      <div>Главный блок с контентом</div>
      <Footer/>
    </div>
  )
}

export default App
