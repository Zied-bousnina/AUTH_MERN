import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import NoAccess from './pages/NoAccess';
import PrivateRouter from './components/PrivateRouter';
import AdminRouter from './components/AdminRouter';
import ForceRedirect from './components/ForceRedirect';
import store from './redux/store';
import { setUser } from './redux/actions/authActions';
import jwt_decode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { SetAuth } from './utils/SetAuth';

if(window.localStorage.jwtToken){
  const decode = jwt_decode(window.localStorage.jwtToken)
  store.dispatch(setUser(decode))
  SetAuth(window.localStorage.jwtToken)
}

function App() {
const auth = useSelector(state=>state.auth)
console.log(auth.user.role)

  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role,
    // role: "USER"
  }
  return (
    <BrowserRouter>
      <div className="bg-light" style={{ height: "100vh" }}>
        <NavBar user={user} />

        <Routes>
          {/* <Route path="/" element={< />} /> */}
          <Route path="/" element={<PrivateRouter user={user}>
            <Profile />
          </PrivateRouter>} />
          <Route path="/login" element={<ForceRedirect user={ user }>
            <Login />
          </ForceRedirect>} />
          <Route path="/register" element={<ForceRedirect user={user}>
            <Register />
          </ForceRedirect>} />
          <Route path="/admin" element={<AdminRouter user={user}>
            <Admin />
          </AdminRouter>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/noaccess" element={<NoAccess />} />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
