import {useEffect, useState} from 'react';


export default function useValidation(value, validations) {
    const [isEmailErr, setEmailErr] = useState(false);
    const [isPhoneErr, setPhoneErr] = useState(false);
    const [isNameErr, setNameErr] = useState(false);
    const [validInput, setValidInput] = useState(false);
    const [checkedErr, setCheckedErr] =useState(false);

        useEffect(() => {
            // eslint-disable-next-line no-unused-vars
            for (const validation in validations) {
                // eslint-disable-next-line default-case
                switch (validation) {
                    case 'isEmailErr':
                        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        re.test(String(value).toLowerCase()) ? setEmailErr(false) : setEmailErr(true);
                        break
                    case 'checkedErr':
                        value ? setCheckedErr(false) : setCheckedErr(true);
                        break
                    case 'isPhoneErr':
                        const regex = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
                        regex.test(String(value).toLowerCase()) ? setPhoneErr(false) : setPhoneErr(true);
                        break
                    case 'isNameErr':
                        const reg = /^[a-zA-Z '.-]*$/;
                        reg.test(String(value).toLowerCase()) ? setNameErr(false) : setNameErr(true);
                        break
                }
            }
        }, [value, validations])
    useEffect(() => {
        // eslint-disable-next-line no-mixed-operators
        if (isEmailErr ||  checkedErr || isPhoneErr || isNameErr){
            setValidInput(false)
            console.log(isPhoneErr)
            console.log(isEmailErr)
            console.log(checkedErr)
        }else {
            setValidInput(true)

        }
    }, [isEmailErr, checkedErr, isPhoneErr, isNameErr])
    return {
            isEmailErr,
            isPhoneErr,
            isNameErr,
            checkedErr,
            validInput
    }
}