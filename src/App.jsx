import './App.css'
import Buton from './component/btn/Buton'
import LineChat from './component/LineChat/LineChat'
// import Header from './component/header/Header'
import Navber from './component/Navber/Navber'
import Phones from './component/Phones/Phones'
import PriceOptions from './component/priceOptions/PriceOptions'
function App() {


  return (
    <>
     {/* <Header></Header> */}
     {/* <Buton></Buton> */}
     <Navber></Navber>
      <h1 className='text-6xl text-center'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChat></LineChat>
      <Phones></Phones>
     
    </>
  )
}

export default App
