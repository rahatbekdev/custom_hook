import { useState } from 'react';

const useInput = (initialValue = '', validate) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value);
        if (validate) {
            setError(validate(value));
        }
    };

    const reset = () => {
        setValue(initialValue);
        setError(null);
    };

    return {
        value,
        error,
        onChange: handleChange,
        reset
    };
};

export default useInput;
