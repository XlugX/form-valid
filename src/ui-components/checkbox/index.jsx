import s from './checkbox.module.css'

const Checkbox =  (props) => {
    const { checked, onChange } = props
    return <div className={s.checkboxBlock}>
        <label><input
        type={"checkbox"}
        checked={checked}
        onChange={onChange}
        className={s.checkbox}
        />
        <span className={s.fakeCheckbox}/></label>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <p>Принимаю <a href="#">условия</a> использования</p>
        </div>
}

export default Checkbox;