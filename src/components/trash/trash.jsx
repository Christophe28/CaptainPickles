import React from 'react';

const Trash = ({ trash }) => {
    return (
        <div className="container-trash">
            {
                trash.map((trashCan) => (
                    <h2 key={trashCan}>Poubelle {trashCan}</h2>
                ))
            }
        </div>
    );
};

export default Trash;