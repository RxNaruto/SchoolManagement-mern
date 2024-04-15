import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { User } from "./pages/User";
import AllStudents from "./pages/AllStudents";


function App(){
  return(
    <>
    <BrowserRouter >
    <Routes>

     <Route path="/signup" element={<Signup />}/>
     <Route path="/signin" element={<Signin />}/>
     <Route path="/user" element={<User />}/>
     <Route path="/allStudents" element={<AllStudents />} />



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;