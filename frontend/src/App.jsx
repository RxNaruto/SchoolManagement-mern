import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { User } from "./pages/User";
import AllStudents from "./pages/AllStudents";
import SingleStudent from "./pages/SingleStudent";
import { SignupTeacher } from "./pages/SignupTeacher";
import { SigninTeacher } from "./pages/SigninTeacher";


function App(){
  return(
    <>
    <BrowserRouter >
    <Routes>

     <Route path="/signup" element={<Signup />}/>
     <Route path="/signin" element={<Signin />}/>
     <Route path="/user" element={<User />}/>
     <Route path="/allStudents" element={<AllStudents />} />
     <Route path="/oneStudents" element={<SingleStudent />} />
     <Route path="/teacher/signup" element={<SignupTeacher />}/>
     <Route path="/teacher/signin" element={<SigninTeacher />}/>



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;