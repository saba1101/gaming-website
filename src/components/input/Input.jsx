import style from '@/components/input/Input.module.scss'
const Input = ({ value, placeholder, onChange }) => {
    return (
        <>
            <div className={style.customInputWrapper}>
                <input type="text" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
            </div>
        </>
    )
}

export default Input