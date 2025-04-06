import Portfolio from './imgs/portfolio.png';
import Game from './imgs/cactpot.png'
import FC from './imgs/fc.jpg'
import WA from './imgs/NVIDIA_Overlay_lAaY7Em8DA.png'

export const ProjectData = {
    portfolio: {
        image: Portfolio,
        title: 'Portfolio',
        alt: 'portfolio-image',
        description: 'My portfolio website which is this one, made with React.js and is used for ' +
            'displaying my projects as well as my skills and education.',
        github: 'https://github.com/AxAnder0095/repotest',
        demo: 'https://github.com/AxAnder0095/repotest',
    },
    miniCactpot: {
        image: Game,
        title: 'Scratch Off Game',
        alt: 'Scratch Off Game Image',
        description: 'This is the scratch off mini game from the MMORPG FFXIV. Pick on row of circles ' +
            'to see how much currency you win. ',
        github: 'https://github.com/AxAnder0095/Mini-Cacptot-Game',
        demo: 'https://youtu.be/VUVxc1Dpk28'
    },
    finest: {
        image: FC,
        title: 'Finest Cuisines',
        alt: 'Finest Cuisines image',
        description: 'NOT FINISHED, currently working on this restaurant themed website. ',
        github: 'https://github.com/AxAnder0095/finestcuisines',
        demo: 'https://youtu.be/KjEx0IGBhgQ'
    },
    weatherApp: {
        image: WA,
        title: 'Weather App',
        alt: 'weather app image',
        description: 'Enter your city and state to see current weather conditions in your area. Open Weather API used for this project',
        github: 'https://github.com/AxAnder0095/weatherapp',
        demo: 'https://www.youtube.com/watch?v=_7OMipUL0zc'
    }
}