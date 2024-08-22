import React from 'react'
import axios from 'axios'

class ImgSearchApi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search : '',
            data: []
        }
    }

    handleInput=(e)=>{
        this.setState({search: e.target.value})
    }

    handleSearch=(e)=>{
        e.preventDefault()
        axios.get(`https://api.unsplash.com/search/photos?query=${this.state.searchItem}&client_id=-FsrBd4KeUG3fiIJjEr8fJHvq-pFPaRENohtuvdJGhY`)
            .then((res) => this.setState({data: res.data.results}))
            .catch((res) => console.log(res))
    }

    render() {
        return (
            <>
                
                <input type='text' placeholder='Enter your search request here' onChange={(e) => this.handleInput(e)}></input>
                <button onClick={(e) => this.handleSearch(e)}>Search</button>
                <h1>Fetching data through axios from url</h1>
                    {
                        this.state.data.map((item) => (
                            <>
                                <img src={item.urls.small}></img>
                            </>
                        ))
                    }
            </>
        )
    }
    
}

export default ImgSearchApi