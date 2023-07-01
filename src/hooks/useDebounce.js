import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value])

    return debouncedValue

}

useDebounce.propTypes = {
    value: PropTypes.string,
    delay: PropTypes.number
}

export default useDebounce;
