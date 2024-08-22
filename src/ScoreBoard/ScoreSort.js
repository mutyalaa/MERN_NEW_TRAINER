import React from "react";
import response from "./data";
import Header from "./Header";
import './HeaderStyles.css';
import TableComp from "./ChildComp";

class ScoreSort extends React.Component {
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
        const sortedData = this.state.data.sort((a,b)=> b.points - a.points);
        return (
            <>
                <Header keyword={4}></Header>
                <h2>Sorted based on Score</h2>

                <TableComp sortedData = {sortedData}></TableComp>
            </>
        )
    }
}

export default ScoreSort