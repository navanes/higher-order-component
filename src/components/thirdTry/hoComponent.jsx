import React, {useState} from 'react';

const hoComponent = (WrappedComponent) => {
    const EnhancedComponent = () => {
        const [isOpen, setIsOpen] = useState(false)
        const toggle = () => {
            setIsOpen(prevState => !prevState);
        }
        return (
            <WrappedComponent
                isOpen={isOpen}
                toggle={toggle}
            />
        )
    }
    return EnhancedComponent;
}

export default hoComponent;