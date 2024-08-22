import React from "react";
import timer from './timer.png'
class TimeComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeLeft: 75000
        }
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.timeLeft> 0) {
                this.setState({timeLeft: this.state.timeLeft - 1000})
            }
        }, 1000);    
    }

    render() {
        const minutes = Math.floor(this.state.timeLeft / 60000);
        // console.log(minutes)
        const seconds = Math.floor((this.state.timeLeft % 60000) / 1000)
        // console.log(seconds)
        return(
            <div className='nav'>
                <h1>To Do App</h1>
                <img src={timer} style={{border: 'none'}}/>
                <h2>{minutes}: {seconds < 10 ? '0' : ''}{seconds}</h2>
            </div>
        )
    }
}

export default TimeComp