import useInput from '../../hooks/input.hook';

import {Input, Button, Label, ErrPass, ErrText} from '../../ui-components';

import s from './form.module.css'


const Form = () => {
    const email = useInput('',{ isEmail: true, minLength: 5 }),
          pass = useInput('', {  minLength: 3, maxLength:8 });

    
    return <div className={s.wrapper}>
    <h2 className={s.formTitle}>Форма регистрации</h2>
        <form>
            <div className={s.formControl}>
                {(email.isDirty && email.isEmail ) ? <ErrText/> : <Label htmlFor={'email'} children={'Электронная почта'}/>}
                <Input
                type={'text'}
                name={'email'}
                placeholder={'example@example.ru'}
                {...email}
                />
            </div>
            <div className={s.formControl}>
                {(pass.isDirty && pass.minLength ) ? <ErrPass/> : <Label htmlFor={'password'} children={'Пароль'}/>}
                <Input
                    type={'password'}
                    name={'password'}
                    placeholder={'Пароль'}
                    {...pass}
                />
            </div>
            <div className={s.btnBlock}>
                <Button
                type={'submit'}
                disabled={!email.validInput || !pass.validInput}
                >Зарегестрироватся
                </Button>
            </div>
        </form>
    </div>
}
export default Form;