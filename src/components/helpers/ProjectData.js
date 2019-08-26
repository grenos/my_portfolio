import uuid from 'uuid';

export const ProjectData = [
  {
    id: uuid(),
    title: 'popcorn 2',
    tech:
      'TypeScript AWS-Auth React Redux React-Router Redux-Persist Redux-Saga React-Spring TDD(Jest, Enzyme)',
    info: `A reconstruction of Popcorn Style with newer and better technologies + Netflix UI ripoff! \u{1F4FD}`,
    webUrl: 'https://popcorn2.herokuapp.com',
    gitHub: 'https://github.com/grenos/popcorn2',
    background: 'linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF)'
  },
  {
    id: uuid(),
    title: 'asos redesign',
    tech: `React Native Redux Redux-Thunk`,
    info: `React Native app made with Asos' hackathon api. A very limited options api stretched to the limits. This app is full of bugs! 👕`,
    webUrl: 'https://www.youtube.com/watch?v=wFb7MzNaGFw&feature=youtu.be',
    gitHub: 'https://github.com/grenos/asos_redesign',
    background: 'linear-gradient(to right, #45B649, #DCE35B)'
  },
  {
    id: uuid(),
    title: 'delecipes',
    tech:
      'React Redux React-Router Redux-Persist Redux-Thunk Webpack Babel Heroku Bootstrap BEM Axios Responsive',
    info: `Look for the best recipes on the web with Spoonacular's api. Search by keyword or cuisine style. You can also pair your recipe with a wine recomendation \u{1F377}`,
    webUrl: 'https://delecipes.herokuapp.com/',
    gitHub: 'https://github.com/grenos/Recipes',
    background: 'linear-gradient(to right, #4CA1AF, #2C3E50)'
  },
  {
    id: uuid(),
    title: 'popcorn style',
    tech: 'Vanilla ES6 jQuery libraries Fetch SCSS Bootstrap Gulp Responsive',
    info: `A Web app to see the latest movie and TV serie releases from TMDB's database along with trailers, similar recomandations and production and actors' info. All build into a Popcorn Time style theme \u{1F4FD}`,
    webUrl: '/items/popcorn-style/src/index.html',
    gitHub: 'https://github.com/grenos/Popcorn-Style-Online',
    background: 'linear-gradient(to bottom, #ffdde1, #ee9ca7)'
  },
  {
    id: uuid(),
    title: 'new portfolio',
    tech: 'Vanilla JavaScript GSAP',
    info: `A new portfolio version (still on the works) heavily based on animations \u{1F5A5}`,
    webUrl: 'https://parallax-slider.herokuapp.com/',
    gitHub: 'https://github.com/grenos/parallax-slider',
    background: 'linear-gradient(to right, #544a7d, #ffd452)'
  },
  {
    id: uuid(),
    title: 'this portfolio',
    tech: 'React Redux React-Router Styled-Components TransisionCSS Responsive',
    info: `Renewed portfolio made with React... Because React is awesome! \u{1F393}`,
    webUrl: '',
    gitHub: 'https://github.com/grenos/my_portfolio',
    background: 'linear-gradient(to right, #ff5f6d, #ffc371)'
  }
];
