import React from 'react'

class LogInComp extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <>
                <h1>Please Login</h1>
                <button onClick={this.props.toggleFunc}>LogIn</button>
            </>
        )
    }
}

export default LogInComp