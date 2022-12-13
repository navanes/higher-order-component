import UpdatedComponent from "./UpdatedComponent";

function HoverCounter({count, incrementCount}) {
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        </div>
    );
}

export default UpdatedComponent(HoverCounter, 10);

