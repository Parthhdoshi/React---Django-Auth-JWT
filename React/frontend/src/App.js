import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

 
function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Header/>
        <Routes>
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<HomePage/>}/>
          </Route>
            <Route exact path='/login' element={<LoginPage/>}/> 
        </Routes>
      </AuthProvider>
    </Router>

    </div>
  );
}

export default App;
