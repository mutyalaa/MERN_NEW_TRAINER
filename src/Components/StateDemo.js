import React from 'react'

class StateDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            data:'initial',
            loginTime: '11:30 pm'
        }
    }
    changeData=()=>{
        console.log('func is called')
        // this.state.date='final'
        // states cant be updated in this way
        // console.log('data is updated', this.state.data)
    
        this.setState({data:'final', loginTime: '2:00 pm'})
        console.log('data is updated')
    }
    render() {
        return(
            <>
                <h1>State Demo</h1>
                <h2>{this.state.data}</h2>
                <h3>{this.state.loginTime}</h3>
                <button onClick={this.changeData}>Change</button>
            </>
        )
    }
}

export default StateDemo