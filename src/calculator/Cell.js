import React from 'react';

const Cell = (props) => {
    return (
        props.array.map((item, index) => (
            <button
                onClick={(e) => props.onClick(e)}
                value={item}
                key={item}
            >
                {item}
            </button>
        ))
    );
};

export default Cell;