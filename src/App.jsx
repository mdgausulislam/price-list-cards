import './App.css'
import DashBoard from './components/DashBoard/DashBoard'
import Navbar from './components/Navbar/Navbar'
import PhoneBar from './components/PhoneBar/PhoneBar'
import PriceList from './components/PriceList/PriceList'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-600'>Hello From Tailwind</h1>
      <PriceList></PriceList>
      <DashBoard></DashBoard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
