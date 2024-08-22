import React from 'react'
import axios from 'axios'
// import './style.css'

class ApiCall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    // handleApiCall = (e) => {
    //     e.preventDefault()
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((res) => this.setState({data: res.data}))
    //     .catch((err) => console.log(err))
    // }

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //      .then((res) => res.json())
    //      .then((res) => this.setState({data: res.data}))
    //      .catch((err) => console.log(err))
    // }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => this.setState({data: res.data}))
        .catch((err) => console.log(err))
    }

    render() {
        return(
            <>
                {/* <button onClick={(e) => this.handleApiCall(e)}>Call API</button> */}

                {
                    this.state.data.map((item) => (
                        <>
                            <h1>{item.name}</h1>
                            <h2>{item.username}</h2>
                            <p>{item.email}</p>
                            ---------------------------
                        </>
                    ))
                }
            </>
        )
    }
}

export default ApiCall