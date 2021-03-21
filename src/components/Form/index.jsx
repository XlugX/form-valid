import useInput, {useCheckbox} from '../../hooks/input.hook';

import {Input, Button, Label, ErrText} from '../../ui-components';
import Checkbox from '../../ui-components/checkbox';
import FormHeader from '../FormHeader';

import s from './form.module.css'





const Form = () => {
    const email = useInput('',{ isEmailErr: true }),
          phone = useInput('', { isPhoneErr: true }),
          name = useInput('', {isNameErr: true}),
          checkbox = useCheckbox(false, { checkedErr: true });

    const clickHandler = (e) => {
        e.preventDefault();
        console.log(checkbox.checked)
    }


    return <div className={s.wrapper}>
        <FormHeader/>
        <form>
            <div className={s.formControl}>
                { (name.isDirty && name.isNameErr ) && <ErrText/> }
                <Label htmlFor={'name'} children={'Имя'}/>
                <Input
                    type={'text'}
                    name={'name'}
                    placeholder={'Введите Ваше имя'}
                    {...name}
                />
            </div>
            <div className={s.formControl}>
                { (email.isDirty && email.isEmailErr ) && <ErrText/>}
                <Label htmlFor={'email'} children={'Email'}/>
                <Input
                type={'text'}
                name={'email'}
                placeholder={'Введите ваш email'}
                {...email}
                />
            </div>
            <div className={s.formControl}>
                {(phone.isDirty && phone.isPhoneErr ) && <ErrText/>}
                <Label htmlFor={'phone'} children={'Номер телефона'}/>
                <Input
                    type={'text'}
                    name={'phone'}
                    placeholder={'Введите номер телефона'}
                    {...phone}
                />
            </div>
            <Checkbox {...checkbox}/>
            <div className={s.btnBlock}>
                <Button
                type={'submit'}
                disabled={!email.validInput || !phone.validInput || !checkbox.validInput || !name.validInput}
                onClick={(e) => clickHandler(e)}
                >Зарегистрироваться
                </Button>
            </div>
        </form>
    </div>
}
export default Form;