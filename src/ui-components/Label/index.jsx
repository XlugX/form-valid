import s from './label.module.css';


export default function Input (props) {
    const {htmlFor, text} = props;
    return <label
        htmlFor={htmlFor}
        className={s.label}
    >
        {text}
    </label>
}