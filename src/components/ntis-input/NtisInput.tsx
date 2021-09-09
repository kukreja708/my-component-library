import React from 'react';
import './NtisInput.css';

export interface NtisInputProps {
    /**
     * To have an input of different sizes
     */
    size?: string;

    /**
     * To show the default text
    */
    placeholder?: string;

}

const NtisInput = ({
    size='medium',
    ...props
 }: NtisInputProps) => {
    return (
        <input 
            type="input"
            className={['ntis-input', `ntis-input--${size}`].join(' ')}
            {...props}
        />
    )
};

export default NtisInput;