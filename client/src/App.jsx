import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from "react-router-dom"
import AppRouter from './routes/AppRouter'
import { UserProvider } from './context/userContext.jsx'
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <UserProvider >
          <Navbar />
          <AppRouter />
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
