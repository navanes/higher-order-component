import UpdatedComponent from "./UpdatedComponent";

function ClickCounter({count, incrementCount, name}) {

    return (
        <div>
            <button onClick={incrementCount}>{name} Clicked {count} times</button>
        </div>
    );
}

export default UpdatedComponent(ClickCounter, 5);
