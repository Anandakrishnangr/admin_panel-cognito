import { Route, Routes } from "react-router-dom"
import { Signup } from "./containers"
import ConfirmSignUp from "./containers/confirmSignup"

export const SignUp = () => {

    return <>
        <Routes>
            <Route path="/*" element={<Signup />} />
            <Route path="/confirm-signup" element={<ConfirmSignUp />} />
        </Routes>
    </>
}
