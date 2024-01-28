import { Route, Routes,  } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import UserData from './UserData';
import Navbar from './Navbar';
import WelcomeMessage from './Welcome';

function App(){
  return (
      <div>
        <Navbar/>
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/userdata" element={<UserData/>}/>
        <Route path="/welcome" element={<WelcomeMessage/>}/>
        </Routes>
      </div>
  );};

export default App;
