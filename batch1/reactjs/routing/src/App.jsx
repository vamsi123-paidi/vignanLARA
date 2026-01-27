import React from 'react'
import NavScrollExample from './components/NavbarComp'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import UserProfile from './pages/UserProfile';
import Dahboard from './pages/Dahboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';



const App = () => {
  return (
    <div>

      <Router>
        <NavScrollExample/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/user/:userId' element={<UserProfile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dahboard/>}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='settings' element={<Settings/>}/>
          </Route>

          <Route path='/admin' element={
            <ProtectedRoute>
              <AdminDashboard/>
            </ProtectedRoute>
          } />


          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App