import ContextProvider from './context/Context'
import Body from './components/Body'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <ContextProvider>
        <div className='flex flex-col max-w-max px-10 py-3 bg-white rounded-lg shadow-xl'>
          <Navbar />
          <Body />
        </div>
      </ContextProvider>
    </>
  )
}

export default App
