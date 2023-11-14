import style from '@/components/button/Button.module.scss'
const Button = ({ label, radius }) => {
    return <>
        <button style={{ borderRadius: radius }} className={style.mainButton}>
            <span>{label || 'Label'}</span>
        </button>
    </>
}
export default Button