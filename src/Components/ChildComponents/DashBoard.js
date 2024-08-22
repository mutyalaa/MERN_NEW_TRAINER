import React from 'react'

class DashBoard extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        const {userName, role} = this.props.userdata
        console.log(userName, role, this.props.toggleFunc)
        return(
            <>
                <h1>Welcome {userName}</h1>
                <h2>Role: {role}</h2>
                <button onClick={this.props.toggleFunc}>LogOut</button>
            </>
        )
    }
}

export default DashBoard