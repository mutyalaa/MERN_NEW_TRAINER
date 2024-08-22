import React from "react";
import response from "./data";
import Header from "./Header";
import TableComp from "./ChildComp";

class AgeSort extends React.Component {
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
        const sortedData = this.state.data.sort((a,b)=> a.age - b.age);
        return (
            <>
                <Header keyword={3}></Header>
                <h2>Sorted based on Age</h2>

                <TableComp sortedData = {sortedData}></TableComp>
            </>
        )
    }
}

export default AgeSort