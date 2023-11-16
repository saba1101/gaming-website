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
    REVIEWS: [
        {
            Authors: 'EpicGamer99',
            Comment: 'The gameplay mechanics are so smooth and satisfying. A definite must-play!',
            Stars: 5,
        },
        {
            Authors: 'ShadowNinja23',
            Comment: 'Graphics are good, but the story lacks depth. Expected more twists.',
            Stars: 3,
        },
        {
            Authors: 'VRgamer34',
            Comment: "The immersive experience in VR blew my mind! It's like being in another world.",
            Stars: 5,
        },
        {
            Authors: 'StrategyMaster',
            Comment: 'Tactical gameplay at its finest. Each decision feels crucial and impactful.',
            Stars: 4,
        },
    ],
    NEWS: [
        {
            Author: 'PlayerOne87',
            Message:
                "In the realm of gaming, exploration isn't just a mechanic; it's a philosophy. It's about diving into the unknown, uncovering hidden gems, and unraveling mysteries that await around every corner. From traversing the vast landscapes of open worlds to delving into the intricacies of narrative-driven experiences, exploration fuels our gaming adventures. The thrill of stumbling upon a breathtaking vista or stumbling into an unexpected encounter keeps us hooked. It's not just about uncovering content but also about self-discovery. Each quest, each hidden treasure, is a step towards mastering the art of exploration in gaming.",
            Label: 'Exploration',
            Date: '2023-11-15',
            Image: Tgame3,
        },
        {
            Author: 'GameMaster99',
            Message:
                "Mastering the latest FPS (First-Person Shooter) games requires more than quick reflexes. It's a blend of strategy, precision, and adaptability. Understanding maps, weapon dynamics, and enemy behaviors are the fundamentals. Yet, true mastery goes beyond these basics. It involves analyzing your gameplay, learning from defeats, and fine-tuning your tactics. From mastering recoil patterns to predicting opponent movements, every match is a learning opportunity. Success in FPS games demands not just skill, but also a strategic mindset coupled with a willingness to constantly evolve and adapt to new challenges.",
            Label: 'Strategy',
            Date: '2023-11-14',
            Image: Tgame2,
        },
        {
            Author: 'GamerGirl22',
            Message:
                "Embarking on a journey through the fantasy realm within a game is akin to stepping into a portal to another dimension. It's an escape from reality into a world filled with mythical creatures, enchanting landscapes, and epic quests. The allure of forging alliances with magical beings, wielding powerful artifacts, and shaping the fate of realms is irresistible. The heart of fantasy games lies not only in the fantastical elements but also in the emotional connections forged with characters and the immersive storytelling that transports us beyond our imagination.",
            Label: 'Review',
            Date: '2023-11-13',
            Image: Tgame4,
        },
        {
            Author: 'EpicGamer123',
            Message:
                "Engaging in multiplayer battles, where strategies clash and skills are put to the test, brings out the competitive spirit in every gamer. It's about teamwork, coordination, and seizing fleeting moments of victory. The rush of adrenaline as you lead your team to triumph, the camaraderie built through shared victories and defeats, defines the essence of multiplayer gaming. Whether it's capturing flags, achieving objectives, or outmaneuvering opponents, multiplayer games provide an endless stream of thrilling experiences.",
            Label: 'Multiplayer',
            Date: '2023-11-12',
        },
        {
            Author: 'RetroGamer1980',
            Message:
                "Exploring the nostalgic realms of retro gaming is like rediscovering lost treasures from the past. It's about revisiting classic titles, reminiscing about pixelated heroes, and cherishing simpler yet equally captivating gameplay. The charm of retro games lies in their timeless appeal. They evoke memories, offering a glimpse into the evolution of gaming while retaining their unique magic. The simplicity of gameplay mechanics and the challenge they pose remind us of the joy in mastering the basics of gaming.",
            Label: 'Retro Gaming',
            Date: '2023-11-11',
        },
        {
            Author: 'Speedster99',
            Message:
                "Racing games aren't just about speed; they encapsulate the thrill of competition, precision driving, and the pursuit of perfection. Whether it's maneuvering through hairpin turns, overtaking rivals, or fine-tuning your vehicle, every race is an adrenaline-fueled challenge. The blend of strategy, reflexes, and the quest for that perfect lap time drives the passion for racing games. From realistic simulations to arcade-style fun, the racing genre caters to all, fostering a love for speed and competition.",
            Label: 'Racing',
            Date: '2023-11-10',
        },
        {
            Author: 'QuestSeeker76',
            Message:
                "Quests in RPGs (Role-Playing Games) offer more than just in-game rewards; they weave tales of heroism, personal growth, and moral dilemmas. It's about immersing oneself in a character's journey, making choices that impact the game world, and forging one's identity within a fantastical realm. The depth of storytelling, character development, and the richness of worlds in RPGs create an immersive experience that extends far beyond the game screen.",
            Label: 'RPG',
            Date: '2023-11-09',
        },
        {
            Author: 'ConsoleGuru55',
            Message:
                'The evolution of gaming consoles has been a journey marked by technological leaps and revolutionary advancements. From pixelated screens to high-definition graphics, from wired controllers to motion-sensitive interfaces, consoles have continually redefined the gaming experience. Each generation brings forth innovations, pushing the boundaries of what gaming can achieve. The excitement of unboxing a new console and exploring its capabilities resonates with every gaming enthusiast.',
            Label: 'Console Evolution',
            Date: '2023-11-08',
        },
        {
            Author: 'MobileGamerPro',
            Message:
                'Mobile gaming has transcended traditional boundaries, offering an accessible platform for gaming on the go. With powerful devices in our pockets, we immerse ourselves in diverse gaming experiences, from casual puzzles to graphically stunning adventures. The convenience and versatility of mobile gaming have expanded the gaming community, allowing anyone to dive into games anytime, anywhere.',
            Label: 'Mobile Gaming',
            Date: '2023-11-07',
        },
    ],
}
