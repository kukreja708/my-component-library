import React from 'react';
import './NtisButton.css';

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    variant?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;

    disabled?: boolean;
}

const NtisButton = ({
    variant = 'primary',
    size = 'medium',
    label,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={['ntis-button', `ntis-btn--${variant}`, `ntis-btn--${size}`].join(' ')}
            
            {...props}
        >
          {label}
        </button>
    )
};

export default NtisButton;
