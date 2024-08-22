import React from 'react';

class SampleClsComp extends React.Component{
    constructor(props) {
        super(props)
        // to access arguments from parent comp
    }
    render() {
        return(
            <>
                <h1>Class Components</h1>
                <h2>{this.props.fName}</h2>
                <h3>Sample</h3>
            </>
        )
    }
}

export default SampleClsComp