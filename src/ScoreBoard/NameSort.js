import React from "react";
import response from "./data";
import Header from "./Header";
import './HeaderStyles.css';
import TableComp from "./ChildComp";

class NameSort extends React.Component {
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
        const sortedData = this.state.data.sort((a,b)=> a.name.localeCompare(b.name));
        return (
            <>
                <Header keyword={2}></Header>
                <h2>Sorted based on Alphabetical Order</h2>

                <TableComp sortedData = {sortedData}></TableComp>
            </>
        )
    }
}

export default NameSort