import React from "react";

class TableComp extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        const sortedData= this.props.sortedData

        return (
            <>
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
                            sortedData.map((item)=>(
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

export default TableComp