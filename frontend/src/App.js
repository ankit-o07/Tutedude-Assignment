import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <UserProfile></UserProfile>
      <Signup></Signup>

      <Login></Login>

      
    </div>
  );
}

export default App;
