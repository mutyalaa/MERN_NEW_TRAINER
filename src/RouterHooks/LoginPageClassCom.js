import React from "react";

class LoginPageClsComp extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:'',
            password:'',
            unameErr:"",
            passwordErr:''
        }
    }
   
    handleSubmit=(e)=>{
        e.preventDefault()
        const {navigate} = this.props.nav
        if (!this.state.username) {
            navigate('/*')
        } else {
            navigate(`/dashboard/${this.state.username}/sde`)  
        }
    }

    handleValidation=(e,keyword)=>{
        if(keyword==="username"){
            if(e.target.value){
                this.setState({username:e.target.value})
            }
            else{
                this.setState({unameErr:"please enter username"})
            }
        }
        if(keyword==="password"){
            if(e.target.value){
                this.setState({password:e.target.value})
            }
            else{
                this.setState({passwordErr:"please enter password"})
            }
        }
    }
    render(){
        return(
            <>
                <form>
                    Username:  <input type="text" onBlur={(e)=>this.handleValidation(e,"username")}></input>
                    <p style={{color:"red"}}>{this.state.unameErr}</p>

                    Password:  <input type="text" onBlur={(e)=>this.handleValidation(e,"password")}></input>
                    <p style={{color:"red"}}>{this.state.passwordErr}</p>
                    
                    <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
                </form>
            </>
        )
    }
}
export default LoginPageClsComp