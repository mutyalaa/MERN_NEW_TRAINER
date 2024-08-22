import React from "react";
import response from "./data";
import Header from "./Header";
import './HeaderStyles.css'
import TableComp from "./ChildComp";

class RankSort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
            this.setState({data: response.list})
    }

    render() {
        const sortedData = this.state.data.sort((a,b)=> a.rank - b.rank);
        return (
            <>
            <Header keyword={1}></Header>
            <h2>Sorted based on Rank</h2>
                <TableComp sortedData = {sortedData}></TableComp>
            </>
        )
    }
}

export default RankSort