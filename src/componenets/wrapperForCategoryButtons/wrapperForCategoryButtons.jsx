import React from 'react';
import Button from "../global/button/button";

function WrapperForCategoryButtons({changeFilter}) {


    return (
        <div style={{marginTop:20,display:'flex',gap: 10}} >
            <Button onClick = {(e)=>changeFilter(e)}>All</Button>
            <Button onClick = {(e)=>changeFilter(e)} color={'red'}>Pending</Button>
            <Button onClick = {(e)=>changeFilter(e)} color={'green'}>Completed</Button>
        </div>
    );
}

export default WrapperForCategoryButtons;