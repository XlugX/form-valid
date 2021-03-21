import s from './formHeader.module.css';


const FormHeader = () => {

    return <div className={s.formHeader}>
        <h2 className={s.formTitle}>Регистрация</h2>
        <div className={s.authText}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <p>Уже есть аккаунт? </p><a href="#" className={s.authLink}> Войти</a>
        </div>

    </div>
}

export default FormHeader;