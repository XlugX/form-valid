import s from './label.module.css';


export default function Input (props) {
    const {htmlFor, children} = props;
    return <label
        htmlFor={htmlFor}
        className={s.label}
    >
        {children}
    </label>
}