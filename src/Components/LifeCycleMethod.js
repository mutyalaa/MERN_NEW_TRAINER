import React from "react";
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            msg:"inital"
        }
    }
    
    static getDerivedStateFromProps(props,state){
       console.log("before",props,state)
       // state.msg=props.msg
        console.log("after",props,state)
        return {msg:props.msg}
    }

    componentDidMount(){
        console.log("inside componentdidmount")
        setTimeout(()=>{
            this.setState({count:this.state.count + 1})
        },3000)
    }

    shouldComponentUpdate(newProps,newState) {
        console.log('inside should comp update')
        console.log(newState.count)
        if (this.state.count === newState.count) {
            return false
        } else {
            return true
        }
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        // console.log("snapshot", prevState)
        // return prevState
        return 'from snapshot'
    }

    componentDidUpdate(props, state,snapValue) {
        console.log('did update', state, snapValue)
    }

    render(){
        {console.log("render")}
        return(
            <>
            <p>Life Cycle Method</p>
            <h1>{this.state.count}</h1>
            <h2>{this.state.msg}</h2>
            </>
        )
    }
}
export default LifeCycleMethods