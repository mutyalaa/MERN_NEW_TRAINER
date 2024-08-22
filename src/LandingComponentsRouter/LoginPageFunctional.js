import { useNavigate,Link } from "react-router-dom"
import LoginPageClass from "./LoginPageClass"
function LoginPageFunctional(){
    let navigate=useNavigate()
   
    return(
        <>
     <LoginPageClass navigate={{navigate}}></LoginPageClass>
        </>
    )
}
export default LoginPageFunctional