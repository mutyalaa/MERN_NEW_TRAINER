import React from "react";
import { useParams } from "react-router-dom";
import DashBoardClsComp from "./DashBoardClsComp";

function DashBoardHooks(){
    const params=useParams()
    return(
        <>
            {console.log(params)}
            <DashBoardClsComp data={params}></DashBoardClsComp>
        </>
    )
}
export default DashBoardHooks