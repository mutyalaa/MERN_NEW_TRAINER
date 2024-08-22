import React from "react";

class DashBoardClsComp extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {username,role} = this.props.data
       
        return(
            <>
                <h2>Username: {username}</h2>
                <p>Role: {role}</p>
            </>
        )
    }
}
export default DashBoardClsComp