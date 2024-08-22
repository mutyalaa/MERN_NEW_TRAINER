import { useNavigate } from "react-router-dom"
import LoginPageClsComp from "./LoginPageClsComp"

function LoginPageFunc() {
    let navigate = useNavigate()   
    return(
        <>
            <LoginPageClsComp nav={{navigate}}></LoginPageClsComp>
        </>
    )
}
export default LoginPageFunc