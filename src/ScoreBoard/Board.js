import React from "react";
import response from './data';
import Header from "./Header";
import './HeaderStyles.css'

class Board extends React.Component{
    constructor(props)
{
    super(props)
    this.state={
        data:[]
    }
}
componentDidMount(){
    this.setState({data:response.list})
}
render(){
    return(
<>
{console.log(this.state.data)}

<Header></Header>

<h2>Data in no specific order</h2>
<table>
<thead>
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Age</th>
        <th>Points</th>
    </tr>
</thead>
<tbody>
    {
        this.state.data.map((item)=>(
            <tr>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.points}</td>
            </tr>
        ))
    }
</tbody>
</table>
</>
    )
}
}
export default Board