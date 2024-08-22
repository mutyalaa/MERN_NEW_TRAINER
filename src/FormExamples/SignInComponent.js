import { paste } from "@testing-library/user-event/dist/paste";
import React from "react";

class SignInComp extends React.Component {
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

    handleValidation = (e, keyword) => {
        if (keyword === 'username') {
            if(e.target.value) {
                this.setState({username: e.target.value})
            } else {
                this.setState({unameErr: 'please enter username'})
            }
        } 
        if (keyword === 'password') {
            if(e.target.value) {
                this.setState({password: e.target.value})
            } else {
                this.setState({pswdErr: 'please enter username'})
            }
        }
    }

    handleSubmit=(e) => {
        e.preventDefault()
        console.log('submitted')
    }

    render() {
        return(
            <>
                <form>
                    User name: <input type="text" onChange={(e) => this.handleChange(e, 'username')} onBlur={(e) => this.handleValidation(e, 'username')}></input>
                    <p style={{color: 'red'}}>{this.state.unameErr}</p>

                    Password: <input type="password" onChange={(e) => this.handleChange(e, 'password')} onBlur={(e) => this.handleValidation(e, 'password')}></input>
                    <p style={{color: 'red'}}>{this.state.pswdErr}</p>

                    <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
                </form>
            </>
        )
    }
}

export default SignInComp