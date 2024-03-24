import React, { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLenError, setMinLenError] = useState(false);
    const [maxLenError, setMaxLenError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(true); 
    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLen':
                    value.length < validations[validation] ? setMinLenError(true) : setMinLenError(false);
                    break;

                case 'maxLen':
                    value.length > validations[validation] ? setMaxLenError(true) : setMaxLenError(false);
                    break;
                
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;

                case 'isEmail':
                    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;

                case 'originalPassword':
                    String(value) === String(validations[validation]) ? setPasswordError(false) : setPasswordError(true);
                    break;
            }
        }
    }, [value, validations]);

    useEffect (() => {
        if (isEmpty || minLenError || emailError || passwordError) {
            setInputValid(false);
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLenError, maxLenError, emailError, passwordError]);

    return {
        isEmpty,
        minLenError,
        emailError,
        passwordError,
        maxLenError,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = (e) => {
        setDirty(true);
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

export default useInput;