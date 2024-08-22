import React from 'react'
import _isEqual from "lodash/isEqual"

class ArchieveComp extends React.Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (_isEqual(nextProps.prop1, this.props.prop1)) {
            return false
        } else {
            return true
        }
    }

    render() {

        return(
            <>
                <div className='innerBox'>
                    {console.log('archieve comp')}
                    <h2>Archieved Tasks</h2>
                    {
                        this.props.prop1.map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className='btns'>
                                    <button className='restore' onClick={() => this.props.prop3(item.id)}>Restore</button>
                                    <button className='del' onClick={() => this.props.prop4(item.id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default ArchieveComp