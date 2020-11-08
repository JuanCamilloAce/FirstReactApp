import React from 'react';

const useroutput = (props) => {
    
    return (
        <div>
            <p>i'm paragraph {props.username}</p>
            <p>{props.phrase}</p>
        </div>
    )
};

export default useroutput;