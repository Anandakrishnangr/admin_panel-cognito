import { Route, Routes } from "react-router-dom";
import Login from "./Login/login";
import { SignUp } from "./Signup/signUp";

const Auth = () => {

    return <>
        <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/signup/*" element={<SignUp />} />
        </Routes>
    </>
}
export default Auth;