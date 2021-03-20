import s from './error.module.css';


export const ErrBlur = () => {
    return <p className={s.error}>
        Поле не может быть пустым!
    </p>
}

export const ErrText = () => {
    return <p className={s.error}>
        Введите коректные данные
    </p>
}

export const ErrPass = () => {
    return <p className={s.error}>
        Пароль должен быть от 3 до 8 символов
    </p>
}