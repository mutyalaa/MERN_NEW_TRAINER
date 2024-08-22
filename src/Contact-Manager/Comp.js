import React from "react";
import axios from "axios";

class ContactManager extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            contacts:[],
            isUpdated:false,
            isId:'',
            ipName:'',
            ipEmail:'',
            ipNumber:'',
            statusMsg:''
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3001/ContactDetails").then((res)=>this.setState({contacts:res.data})).catch
        ((err)=>console.log("error"))
    }
    handleChange=(e,keyword)=>{
        if(keyword==="contactname"){
            this.setState({ipName:e.target.value})
        }
        else if(keyword==="contactemail"){
            this.setState({ipEmail:e.target.value})
        }
        else{
            this.setState({ipNumber:e.target.value})
        }

    }
    handleSubmit=(e)=>{
        e.preventDefault()

        if(this.state.isUpdated){
            axios.put(`http://localhost:3001/ContactsDetails/${this.state.isId}`, {
                cname: this.state.ipName,
                cno: this.state.ipNumber,
                cemail: this.state.ipEmail
    
            }).then((res) => {
                const temp=[...this.state.contacts];
                const index=temp.findIndex((item)=>item.id===res.data.id)

                if (index !== -1) {
                    temp[index] = res.data;
                    this.setState({contacts: temp})
                } else {
                    console.log('item not found')
                }
            }).catch((err) => this.setState({ statusMsg: "some error occurred while updating please try again" }))
            this.setState({isUpdated:!(this.state.isUpdated)})
        }
          
        else{
        axios.post("http://localhost:3001/ContactDetails",{
            cname:this.state.ipName,
            cemail:this.state.ipEmail,
            cno:this.state.ipNumber
        }).then((res)=> { 
            const contact = [...this.state.contacts, res.data]
            this.setState({contacts: contact, statusMsg: 'saved the contact details successfully'})
        })
        .catch((err)=>this.setState({statusMsg:"some error occurred please try again"}))
        }
    }

    handleUpdate=(e,keyid)=>{
        this.setState({isUpdated:!(this.state.isUpdated), isId:keyid})
    }

    handleDelete = (e, keyId) => {
        axios.get(`http://localhost:3001/ContactDetails/${keyId}`)
            .then((res) => {
                const contact = this.state.contacts
                const newContact = contact.filter((item) => item.id !== keyId)
                this.setState({contacts: newContact})
            })
            .catch((err) => console.log('error'))
        axios.delete(`http://localhost:3001/ContactDetails/${keyId}`)
            .then((res) => console.log(res.data))
            .catch((res) => console.log('error occured in delete'))
    }
    
    render(){
        return(   
    <>
    <form style={{display: "block", width: '40%', margin: '0 auto'}}>
        <p>Contact Name: <input type="text" style={{width: '60%', marginLeft: '20px'}} placeholder="enter the name of the contact" onChange={(e)=>this.handleChange(e,"contactname")}></input></p>
        <p>Contact Mail: <input type="text" style={{width: '60%', marginLeft: '20px'}} placeholder="Email"onChange={(e)=>this.handleChange(e,"contactemail")} ></input></p>
        <p>Contact Number: <input type="text" style={{width: '60%', marginLeft: '10px'}} placeholder="Phone" onChange={(e)=>this.handleChange(e,"contactnumber")}></input></p>
        <button onClick={(e)=>this.handleSubmit(e)}>{(this.state.isUpdated)?"Update Contact":"Create Contact"}</button>

    </form>
    <p style={{color:"red"}}>{this.state.statusMsg}</p>
    {
        this.state.contacts.map((item)=>(
            <div style={{display: 'flex', gap: '20px', margin: '0 auto', width: '70%'}} key={item.id}>
                <h2 style={{width: '30%',textAlign: 'left'}}>Name: {item.cname}</h2>
                <p style={{width: '30%',textAlign: 'left'}}>Phone: {item.cno}</p>
                <p style={{width: '30%',textAlign: 'left'}}>Email: {item.cemail}</p>
                <button style={{height: '50%', margin: 'auto', marginRight: '10px'}} onClick={(e)=>this.handleUpdate(e,item.id)}>Update</button>
                <button style={{height: '50%', margin: 'auto', marginRight: '10px'}} onClick={(e) => this.handleDelete(e, item.id)}>Delete</button>
                <br></br>
            </div>
        ))
    }
    </>
        )
    }
}
export default ContactManager