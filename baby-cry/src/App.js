import logo from './logo.svg';
import './App.css';
import Extranavbar from './Componants/Navbar/Extranavbar';
import LowerNavbar from './Componants/Navbar/LowerNavbar';
import Login from "./Componants/Login/Login"
import SignUp from './Componants/Login/SIgnUp';

function App() {
  return (
    <div className="App">
  <Extranavbar/>
    <LowerNavbar/>

    <Routes>
    <Route path="login" element={<Login/>}></Route>
      <Route path="signup" element={<SignUp/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
