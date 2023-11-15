import style from '@/pages/about/AboutUs.module.scss'
import { useEffect, useState } from 'react'
import { CONTENT_MANAGER } from '../../../utils/Data'

const OurTeam = () => {
    const [Team, setTeam] = useState([])

    useEffect(() => {
        setTeam(CONTENT_MANAGER.TEAM_MEMBERS)
    }, [])
    return (
        <>
            <div
                className={style.templateOurTeam}
                data-aos="fade-up"
            >
                <h1>Our Team</h1>
                <ul>
                    {Team &&
                        Team.map((member, index) => {
                            return (
                                <li key={index}>
                                    <div className={style.avatar}>
                                        <span>
                                            {member.Label.Firstname.slice(0, 1)}.{member.Label.Lastname.slice(0, 1)}
                                        </span>
                                    </div>
                                    <div className={style.visibleDetails}>
                                        <span>
                                            {member.Label.Firstname} {member.Label.Lastname}
                                        </span>
                                        <span>{member.Position}</span>
                                    </div>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </>
    )
}

export default OurTeam
