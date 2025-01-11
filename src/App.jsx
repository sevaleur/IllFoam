import Experience from './Canvas/Experience'
import Header from './components/Header'
import ShoeInfo from './components/ShoeInfo'
import Colorways from './components/Colorways'

function App() {
  return (
    <main className='h-screen w-screen relative bg-white-100'>
      <Header /> 
      <Colorways />
      <Experience /> 
      <ShoeInfo /> 
    </main>
  )
}

export default App
