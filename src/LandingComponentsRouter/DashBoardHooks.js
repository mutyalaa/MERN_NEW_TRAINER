import React from "react";
import { useParams } from "react-router-dom";
import DashBoardClass from "./DashBoardClass";
function DashBoardHooks(){
    const params=useParams()
    return(
        <>
        {console.log(params)}
     <DashBoardClass data={params}></DashBoardClass>

        </>
    )
}
export default DashBoardHooks