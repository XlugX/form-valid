import {useState} from 'react';
import useInput from '../../hooks/input.hook';
import {Input, Button, Label, ErrBlur, ErrPass, ErrText} from '../../ui-components';

import s from './form.module.css'


const Form = () => {
    const [emailDirty, setEmailDirty] = useState(false),
          [passDirty, setPassDirty] = useState(false)
    const age = useInput(''),
          email = useInput(''),
          pass = useInput('');

    const blurHandler = (e) => {
        // eslint-disable-next-line default-case
        if (e.target.name === 'email' && email.value.length < 1) {
            setEmailDirty(true)
        } else if (email.value.length > 1) {
            setEmailDirty(false)
            // eslint-disable-next-line no-mixed-operators
        }else if (e.target.name === 'password' && pass.value.length < 3 || pass.value.length > 8) {
            setPassDirty(true)
        } else if (pass.value.length >= 3 || pass.value.length <= 8) {
            setPassDirty(false)
        }

    }
    const clickHandler = (e) => {
        e.preventDefault();
        console.log(age.value);
        console.log(email.value);
        console.log(pass.value)
    }
    return <div className={s.wrapper}>
    <h2 className={s.formTitle}>Форма регистрации</h2>
        <form>
            <div className={s.formControl}>
                {emailDirty ? <ErrBlur/> : <Label htmlFor={'email'} text={'Электронная почта'}/>}
                <Input
                type={'text'}
                name={'email'}
                placeholder={'example@example.ru'}
                onBlur={(e) => blurHandler(e)}
                {...email}
                />
            </div>
            <div className={s.formControl}>
                {passDirty ? <ErrPass/> : <Label htmlFor={'password'} text={'Пароль'}/>}
                <Input
                    onBlur={(e) => blurHandler(e)}
                    type={'password'}
                    name={'password'}
                    placeholder={'Пароль'}
                    {...pass}
                />
            </div>
            <div className={s.formControl}>
                <Label htmlFor={'age'} text={'Возраст'}/>
                <Input
                    type={'text'}
                    name={'age'}
                    placeholder={'19'}
                    {...age}
                />
            </div>
            <div className={s.btnBlock}>
                <Button
                type={'submit'}
                onClick={clickHandler}
                >Зарегестрироватся
                </Button>
            </div>
        </form>
    </div>
}
export default Form;