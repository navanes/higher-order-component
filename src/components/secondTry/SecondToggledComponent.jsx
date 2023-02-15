import React from 'react';
import withToggle from "./withToggle";

function SecondToggledComponent({toggle, isOpen, childOpen, secondToggle}) {
    return (
        <div>
            <button onClick={toggle}>click here to check the content.</button>
            {isOpen &&
            <div>
                <p>Here something that nobody know about.</p>
                <button onClick={secondToggle}>click here to see</button>
                {childOpen && <h1>HaHaHa nothing's here gotcha.</h1>}
            </div>
            }
        </div>
    );
}

export default withToggle(SecondToggledComponent);