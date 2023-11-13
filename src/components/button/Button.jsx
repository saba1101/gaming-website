import style from '@/components/button/Button.module.scss'
const Button = ({ label }) => {
    return <>
        <button className={style.mainButton}>
            <span>{label || 'Label'}</span>
        </button>
    </>
}
export default Button