import {useEffect, useState} from 'react';


export default function useValidation(value, validations) {
    const [isEmail, setEmail] = useState(false);
    const [minLength, setMinLengthErr] = useState(false);
    const [validInput, setValidInput] = useState(false);

        useEffect(() => {
            // eslint-disable-next-line no-unused-vars
            for (const validation in validations) {
                // eslint-disable-next-line default-case
                switch (validation) {
                    case 'isEmail':
                        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        re.test(String(value).toLowerCase()) ? setEmail(false) : setEmail(true);
                        break
                    case 'minLength':
                        value.length < validations[validation] ? setMinLengthErr(true) : setMinLengthErr(false);
                        break
                }
            }
        }, [value, validations])

    useEffect(() => {
        if (isEmail || minLength){
            setValidInput(false)
        }else {
            setValidInput(true)
        }
    }, [isEmail, minLength])
    return {
            isEmail,
            minLength,
            validInput
    }
}