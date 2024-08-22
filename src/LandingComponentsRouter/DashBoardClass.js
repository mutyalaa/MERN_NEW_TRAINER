import React from "react";

class DashBoardClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username}=this.props.data
       
return(

    <>
       
    <h1>DashBoardComponent</h1>
    <h2>Welcome {username}</h2>
  
    </>
)
    }
}
export default DashBoardClass