import { useState } from 'react';

const withToggle = (WrappedComponent) => {
    const EnhancedComponent = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [childOpen, setChildOpen] = useState(false);
        const toggle = () => {
            setIsOpen(prevState => !prevState)
        }
        const secondToggle = () => {
            setChildOpen(prevState => !prevState)
        }
        return (
            <WrappedComponent
                isOpen={isOpen}
                toggle={toggle}
                childOpen={childOpen}
                secondToggle={secondToggle}
            />
        )
    }
    return EnhancedComponent;
}

export default withToggle;