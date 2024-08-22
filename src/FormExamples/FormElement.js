import React from "react";
class FormElements extends React.Component{
    constructor(props)

{
    super(props)
    this.state={
        tech:'',
        projects:'',
        agree:true
    }
}

// inidividual func without kw
// handleTech=(e)=>{
//     console.log(e.target.value)
//     this.setState({tech:e.target.value})
// }
// handleExp=(e)=>{
//     console.log(e.target.value)
//     this.setState({projects:e.target.value})
// }
// handleAgreement=(e)=>{
//     this.setState({agree:!this.state.agree})
// }


// with keywords
// handleChange = (e,keyword)=>{
//     if(keyword === "tech"){
//             console.log(e.target.value)
//         this.setState({tech:e.target.value})
//     }
//     else if(keyword === "exp"){
//         console.log(e.target.value)
//         this.setState({projects:e.target.value})
//     }
//     else{
//         this.setState({agree:!this.state.agree})
//     }
// }

handleChange = (e) => {
    const {name, value} = e.target
    console.log(name,value)
    this.setState({[name]: value})
}

render(){
    return(
        <form>
            Select your tech: <select name="tech" onChange={(e)=>this.handleChange(e, 'tech')}>
                <option value="">---select---</option>
                <option value="React JS">React JS</option>
                <option value="Node JS">Node JS</option>
                <option value="Express JS">Express JS</option>
            </select>
            <br></br>
            Add your experience:<textarea name="projectdHandled" cols="20" rows="10" onChange={(e)=>this.handleChange(e, 'projects')}>

            </textarea>
            <br></br>
           I Agree to the terms and condition <input type="checkbox" name="agreement" checked={this.state.agree} onChange={(e)=>this.handleChange(e, 'agree')}></input>
           <button>submit</button>
        </form>
    )
}
}
export default FormElements