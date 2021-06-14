import React from 'react'

import './Button.scss';

const Button = ({colour, text}) => {
    const [onLoad, setOnLoad] = React.useState(true);

    React.useEffect(() => {
        
    }, [])
    return (
        <button class = {`button ${colour}`}>
            {text}
        </button>
    )
}

export default Button;