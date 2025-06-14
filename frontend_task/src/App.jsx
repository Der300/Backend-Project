import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/errors/NotFound';
import ErrorServer from './pages/errors/ErrorServer';
import UnAuthorized from './pages/errors/UnAuthorized';


function App() {

  return (
    <>
      <Login></Login>
      {/* <Register></Register> */}
      {/* <NotFound></NotFound> */}
      {/* <ErrorServer></ErrorServer> */}
      {/* <UnAuthorized/> */}
    </>
  )
}

export default App
