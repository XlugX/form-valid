import s from './button.module.css';


export default function Button (props) {
    const { type, onClick, children, disabled } = props;

    return <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={s.button}
    >
        {children}
    </button>
}