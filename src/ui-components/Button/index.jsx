import s from './button.module.css';


export default function Button (props) {
    const { type, onClick, children } = props;

    return <button
            type={type}
            onClick={onClick}
            className={s.button}
    >
        {children}
    </button>
}