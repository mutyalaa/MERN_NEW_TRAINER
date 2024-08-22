import { paste } from "@testing-library/user-event/dist/paste";
import React from "react";

class AfterSubmit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            unameErr: '',
            pswdErr: ''
        }
    }

    handleChange=(e, keyword) => {
        if (keyword === 'username') {
            this.setState({username: e.target.value})
        }
        if (keyword === 'password') {
            this.setState({password: e.target.value})
        }
    }

    handleSubmit=(e) => {
        e.preventDefault()
        const {username, password} = this.state
        console.log('submitted')
        if (!username) {
            this.setState({unameErr: 'please enter username'})
        }
        if (!password) {
            this.setState({pswdErr: 'please enter password'})
        }
    }

    render() {
        return(
            <>
                <form>
                    User name: <input type="text" onChange={(e) => this.handleChange(e, 'username')}></input>
                    <p style={{color: 'red'}}>{this.state.unameErr}</p>
                    Password: <input type="password" onChange={(e) => this.handleChange(e, 'password')}></input>
                    <p style={{color: 'red'}}>{this.state.pswdErr}</p>

                    <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
                </form>
            </>
        )
    }
}

export default AfterSubmit