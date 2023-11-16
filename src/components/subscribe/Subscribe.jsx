import style from '@/components/subscribe/Subscribe.module.scss'
import Input from '@/components/input/Input'
import { useState } from 'react'
import Button from '@/components/button/Button.jsx'
const Subscribe = () => {
    const [Value, setValue] = useState('')

    return (
        <>
            <div
                className={style.templateSubscribe}
                data-aos="fade-up"
            >
                <div className={style.leftSide}>
                    <h1>Stay in the loop</h1>
                    <p>Subscribe to receive the latest news and updates about TDA. We promise not to spam you!</p>
                </div>
                <div className={style.rightSide}>
                    <div className={style.subscribeField}>
                        <Input
                            value={Value}
                            placeholder={'Email or Firstname Or Lastname'}
                            onChange={(value) => setValue(value)}
                        />
                        <div className={style.subscribeButton}>
                            <Button
                                radius={'0'}
                                label={'Subscribe'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe
