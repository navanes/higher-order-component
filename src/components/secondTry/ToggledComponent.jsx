import React from 'react';
import withToggle from "./withToggle";

function ToggledComponent({toggle, isOpen}) {
    return (
        <div>
            <button onClick={toggle}>Toggle</button>
            {isOpen && <p>Here's some content that can be toggled.</p>}
        </div>
    );
}

export default withToggle(ToggledComponent);