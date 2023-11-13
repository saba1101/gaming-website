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
        }
    ],
    SERVICES: [
        {
            Label: 'Mobile Game Development',
            Image: IconMobile
        },
        {
            Label: 'PC Game Development',
            Image: IconPC

        },
        {
            Label: 'PS4 Game Development',
            Image: IconPS
        },
        {
            Label: 'AR/VR Solutions',
            Image: IconVR
        },
        {
            Label: 'AR/ VR design',
            Image: IconVRD
        },
        {
            Label: '3D Modelings',
            Image: IconModeling,
        },
    ],
}