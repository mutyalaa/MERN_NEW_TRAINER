import React from "react"
import { Outlet, Link} from "react-router-dom"

class UserPage extends React.Component{
    constructor(props) {
        super(props)
    }
    render()
    {
        return(
            <>
              
                <h1>Lyros Tech </h1>
                <p>Organize a meeting</p>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/dashboard'> <button>Dashboard</button></Link>
                <Outlet></Outlet>
          
            </>
        )
    }
}
export default UserPage