import React from 'react';
import DisplayRow from "./displayElement/displayRow";
function DisplayTable({changeData,changeStatus,deleteElem,allData,...props}) {
    return (
        <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {allData.map((el) => <DisplayRow changeData = {changeData} deleteElem = {deleteElem} elem={el} key ={el.id}></DisplayRow>)}
                </tbody>
        </table>
    );
}

export default DisplayTable;