import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import {UserContext,UserProvider} from './usercontext';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Card from './cardcomponent';
import User from './user';
import CUser from './createUser';
import EditUser from './edituser'; 
import Profile from './profile';
function App() {
  return (
    <>
    <BrowserRouter>
    <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" className='d-flex flex-column'>
            <div id="content">
            <UserProvider>
              <Navbar></Navbar>
              <div className='container-fluid'>
                <div className='row'>
                  
                  <Routes>
                  <Route path="/" element={<Card />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/cuser" element={<CUser />} />
                  <Route path="/edituser/:id" element={<EditUser/>}/>
                  <Route path="/profile/:id" element={<Profile/>}/>
                  </Routes>
                
                  
                 </div>
              </div>
              </UserProvider>
            </div>
          
          </div>
      </div>
    </BrowserRouter>
      
    </>
    
  );
}

export default App;
