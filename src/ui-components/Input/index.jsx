import s from './input.module.css';


export default function Input (props) {
    const { type, name, placeholder, value, onChange, onBlur } = props;

    return <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    className={s.input}
    />
}