import React from "react";

class DashBoardComp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {userName,role}=this.props.userData
        {console.log("child dashboard")}
        return(
        <>
        <h1>Welcome {userName}</h1>
        <h2>Role:{role}</h2>
        <button onClick={this.props.toggleFunc}>logout</button>
        </>
        )
    }
}
export default DashBoardComp