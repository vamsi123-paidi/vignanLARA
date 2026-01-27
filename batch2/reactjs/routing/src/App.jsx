import React from 'react'
import NavScrollExample from './components/NavbarComp'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import ProtectedRoute from './pages/ProtectedRoute';
import AdminDashbard from './pages/AdminDashbard';
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
          <Route path='login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='settings' element={<Setting/>}/>
          </Route>


          <Route path='admin' element={<ProtectedRoute>
            <AdminDashbard/>
          </ProtectedRoute>}/>

          <Route path='*' element={<PageNotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App