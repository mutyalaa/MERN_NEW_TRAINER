import React from 'react' 

class PureComp extends React.PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    changeCount = () => {
        this.setState({count: this.state.count})
    }
    render() {
        console.log('render')
        return(
            <>
            <p>pure component</p>
                <h1>{this.state.count}</h1>
                <button onClick={this.changeCount}>change</button>
            </>
        )
    }
}

export default PureComp