import {useState} from "react";

const UpdatedComponent = (WrappedComponent, increment) => {
    const NewComponent = ({name}) => {
        const [count, setCount] = useState(0)
        const incrementCount = () => {
            setCount(prevState => prevState + increment)
        }

        return  <WrappedComponent
            count={count}
            incrementCount={incrementCount}
            name={name}
        />
    }
    return NewComponent
}

export default UpdatedComponent;
