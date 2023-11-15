import Tgame1 from '@/assets/images/games/forHonor.png'
import Tgame2 from '@/assets/images/games/crysis.png'
import Tgame3 from '@/assets/images/games/stray.png'
import Tgame4 from '@/assets/images/games/lol.png'

import IconModeling from '@/assets/svgComponents/IconModeling'
import IconPC from '@/assets/svgComponents/IconPC'
import IconPS from '@/assets/svgComponents/IconPS'
import IconVR from '@/assets/svgComponents/IconVR'
import IconMobile from '@/assets/svgComponents/IconMobile'
import IconVRD from '@/assets/svgComponents/IconVRD'

import IconFB from '@/assets/svgComponents/IconFB'
import IconTW from '@/assets/svgComponents/IconTW'
import IconLinkdin from '@/assets/svgComponents/IconLinkdin'
import IconInstagram from '@/assets/svgComponents/IconInstagram'

import IconPlace from '@/assets/svgComponents/IconPlace'
import IconServer from '@/assets/svgComponents/IconServer'
import IconProfile from '@/assets/svgComponents/IconProfile'

export const CONTENT_MANAGER = {
    TRENDING_GAMES: [
        {
            Followers: 40,
            Image: Tgame1,
            Publisher: 'Ubisoft',
            Label: 'For Honor',
            Year: 2017,
        },
        {
            Followers: 40,
            Image: Tgame2,
            Publisher: 'Crytek',
            Label: 'Crysis 3',
            Year: 2013,
        },
        {
            Followers: 40,
            Image: Tgame3,
            Publisher: 'BlueTwelve Studio',
            Label: 'Stray',
            Year: 2022,
        },
        {
            Followers: 40,
            Image: Tgame4,
            Publisher: 'Riot Games',
            Label: 'League of Legends',
            Year: 2009,
        },
    ],
    SERVICES: [
        {
            Label: 'Mobile Game Development',
            Image: IconMobile,
        },
        {
            Label: 'PC Game Development',
            Image: IconPC,
        },
        {
            Label: 'PS4 Game Development',
            Image: IconPS,
        },
        {
            Label: 'AR/VR Solutions',
            Image: IconVR,
        },
        {
            Label: 'AR/ VR design',
            Image: IconVRD,
        },
        {
            Label: '3D Modelings',
            Image: IconModeling,
        },
    ],
    SOCIALS: [
        {
            Icon: IconFB,
        },
        {
            Icon: IconTW,
        },
        {
            Icon: IconLinkdin,
        },
        {
            Icon: IconInstagram,
        },
    ],
    TEAM_MEMBERS: [
        {
            Label: { Firstname: 'Alice', Lastname: 'Smith' },
            Address: 'New York',
            Age: 28,
            Experience: '8 Years',
            Position: 'Software Engineer',
        },
        {
            Label: { Firstname: 'Bob', Lastname: 'Johnson' },
            Address: 'Los Angeles',
            Age: 35,
            Experience: '12 Years',
            Position: 'Data Analyst',
        },
        {
            Label: { Firstname: 'Charlie', Lastname: 'Williams' },
            Address: 'Chicago',
            Age: 42,
            Experience: '5 Years',
            Position: 'Network Administrator',
        },
        {
            Label: { Firstname: 'Diana', Lastname: 'Brown' },
            Address: 'Houston',
            Age: 45,
            Experience: '18 Years',
            Position: 'UX Designer',
        },
        {
            Label: { Firstname: 'Eva', Lastname: 'Jones' },
            Address: 'Phoenix',
            Age: 50,
            Experience: '10 Years',
            Position: 'IT Support',
        },
    ],
    OVERVIEW: [
        {
            Label: 'Clients',
            Value: '90',
            Icon: IconProfile,
        },
        {
            Label: 'Countries',
            Value: '20',
            Icon: IconPlace,
        },
        {
            Label: 'Projects',
            Value: '50',
            Icon: IconServer,
        },
    ],
}
