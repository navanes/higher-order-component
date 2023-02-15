import React from 'react';
import hoComponent from "./hoComponent";

function ThirdTryComponent({isOpen, toggle}) {
    return (
        <div>
            <h1>Trying to learn about HOC</h1>
            <button onClick={toggle}>see more</button>
            {
                isOpen &&
                <p>
                    A higher order component is a function that takes a component as an input and returns a new component as an output. It differs from a regular component in that it doesn't render any markup or UI itself, but instead enhances the behavior or functionality of other components.
                    Higher order components can offer several benefits in a React application, including code reuse, modularity, and encapsulation of shared functionality. By wrapping multiple components in a higher order component, you can avoid duplicating code and simplify the management of state and behavior across the application.
                    One example of a higher order component is a "withAuthentication" HOC that wraps a component and checks if the user is authenticated before rendering it. If the user is not authenticated, it redirects to a login page. This HOC can be used to enforce authentication on any component that requires it, without duplicating the authentication logic in each one.
                </p>
            }
        </div>
    );
}

export default hoComponent(ThirdTryComponent);