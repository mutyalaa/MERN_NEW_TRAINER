import React from "react";
import {Link} from 'react-router-dom'
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rank: false,
            name: false,
            age: false,
            points: false
        }
    }

    componentDidMount() {
        if(this.props.keyword === 1) {
            this.setState({rank:true})
        }
        if(this.props.keyword === 2) {
            this.setState({name:true})
        }
        if(this.props.keyword === 3) {
            this.setState({age:true})
        }
        if(this.props.keyword === 4) {
            this.setState({points:true})
        }
    }
    render() {
        return(
            <>
                <Link to='/'></Link>
                <Link to='/rank'>
                <button className={this.state.rank ? 'activeStatus' : 'inactiveStatus'}>Rank</button></Link>
                <Link to='/name'>
                <button className={this.state.name ? 'activeStatus' : 'inactiveStatus'}>Name</button></Link>
                <Link to='/age'>
                <button className={this.state.age ? 'activeStatus' : 'inactiveStatus'}>Age</button></Link>
                <Link to='/points'>
                <button className={this.state.points ? 'activeStatus' : 'inactiveStatus'}>Score</button></Link>
            </>
        )
    }
}

export default Header