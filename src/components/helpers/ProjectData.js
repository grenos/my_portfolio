import uuid from 'uuid';

export const ProjectData = [
  {
    id: uuid(),
    title: 'delecipes',
    tech: 'React Redux React-Router Thunk Webpack Babel Bootstrap BEM Axios',
    info: `Look for the best recipes on the web with Spoonacular's api. Search by keyword or cuisine style. You can also pair your recipe with a wine recomendation \u{1F377}`,
    webUrl: '/items/recipes/index.html',
    gitHub: 'https://github.com/grenos/Recipes',
    background: 'linear-gradient(to right, #4CA1AF, #2C3E50)'
  },
  {
    id: uuid(),
    title: 'popcorn style',
    tech: 'Vanilla ES6 jQuery libraries Fetch SCSS Bootstrap Gulp',
    info: `A Web app to see the latest movie and TV serie releases from TMDB's database along with trailers, similar recomandations and production and actors' info. All build into a Popcorn Time style theme \u{1F4FD}`,
    webUrl: '/items/popcorn-style/src/index.html',
    gitHub: 'https://github.com/grenos/Popcorn-Style-Online',
    background: 'linear-gradient(to bottom, #ffdde1, #ee9ca7)'
  },
  {
    id: uuid(),
    title: 'react components',
    tech: 'React and other dependencies',
    info: `A growing collection of React components with emphasis either on functionality or design \u{1F5A5}`,
    webUrl: '',
    gitHub: 'https://github.com/grenos/My_React_Components',
    background: 'linear-gradient(to right, #f05053, #e1eec3)'
  },
  {
    id: uuid(),
    title: 'contact list',
    tech: 'Vanilla ES6 jQuery Materialize',
    info: `A contact list web app where you can save contacts and also search them on social media based on their contact information \u{1F4DA}`,
    webUrl: '/items/Contacts_App/index.html',
    gitHub: 'https://github.com/grenos/Contacts_App',
    background: 'linear-gradient(to right, #45B649, #DCE35B)'
  },
  // {
  //   id: uuid(),
  //   title: 'bootstrap cards',
  //   tech: 'Bootstrap Responsive CSS',
  //   info: `A pair of Bootstrap cards with a lot of absolute positioning and layering and heavy use of media queries to fit any device \u{1F0CF}`,
  //   webUrl: 'https://grenos.github.io/items/animated-card/index.html',
  //   gitHub: 'https://github.com/grenos/Bootstrap-Cards',
  //   background: 'linear-gradient(to right, #0575E6, #00F260)'
  // },
  {
    id: uuid(),
    title: 'restaurant template',
    tech: 'Vanilla ES6 jQuery Bootstrap',
    info: `A restaurant template website with emphasis on design and cool functionality \u{1F356}`,
    webUrl: '/sites/prepon/index.html',
    gitHub: '',
    background: 'linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF)'
  },
  {
    id: uuid(),
    title: 'this portfolio',
    tech: 'React Redux React-Router Styled-Components TransisionCSS',
    info: `Renewed portfolio made with React... Because React is awesome! \u{1F393}`,
    webUrl: '',
    gitHub: 'https://github.com/grenos/my_portfolio',
    background: 'linear-gradient(to right, #4CA1AF, #2C3E50)'
  }
];
