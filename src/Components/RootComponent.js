import React from 'react'
import DashBoard from './ChildComp/Dashboard'
import LogInComp from './ChildComp/LoginComp'

class RootComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogged: true,
            user: {
                userName: 'likhita',
                role: 'sde'
            }
        }
    }

    toggleUser = () => {
        this.setState({isLogged: !(this.state.isLogged)})
    }
    render() {
        return(
            <>
                {this.state.isLogged ? 
                    <DashBoard userdata={this.state.user} toggleFunc={this.toggleUser}></DashBoard>
                : 
                    <LogInComp toggleFunc={this.toggleUser}></LogInComp>
                }
            </>
        )
    }
}

export default RootComp