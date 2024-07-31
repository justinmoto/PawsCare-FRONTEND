import Login from "./pages/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignUp from "./pages/SignUp"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import Admin from "./pages/Admin"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
