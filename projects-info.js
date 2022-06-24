import img1 from "./public/images/journal-project.png";
import img2 from "./public/images/ecommerce-project.png";
import img3 from "./public/images/movie-project-1.png";
import img4 from "./public/images/movie-project-2.png";

export default [
  {
    title: "Journal app with Vue",
    description:
      "A responsive single page application allowing registered users to create and use personal journals, where they can manage journal entries. A great learning experience for me to practice implementing CRUD operations, using a REST API I've built with Node, Express and MongoDB.",
    techstack: [
      "Vue 3",
      "VueX",
      "Composition API",
      "CSS",
      "Node",
      "Express",
      "MongoDB",
      "JWT",
      "Mongoose",
      "Axios",
    ],
    github: "https://github.com/rpashev/vue-journal-app/#readme",
    live: "https://my-journal.live/",
    img: img1,
    rest: "https://github.com/rpashev/journal-app-REST",
  },
  {
    title: "E-commerce app with React",
    description:
      "A fully responsive Next/React e-commerce application created by using Static Generation for most pages and Server Side Rendering for others. I used a few new to me web technologies in this project that made the development process challenging, engaging and educational.",
    techstack: [
      "React",
      "Next",
      "NextAuth",
      "Redux Toolkit",
      "Redux Persist",
      "SCSS",
      "Bootstrap 5",
      "MongoDB",
    ],
    github: "https://github.com/rpashev/next-ecommerce/#readme",
    live: "https://www.dummy-shop.live/",
    img: img2,
    rest: false,
  },
  {
    title: "Movie app with Angular",
    description:
      "A responsive single page application allowing registered users to search for movies using an external API and organize the movies in userlists. Originally built in React (as per below project), the app consumes the same APIs but this time using Angular as a front end framework. ",
    techstack: [
      "Angular",
      "TypeScript",
      "RxJS",
      "SASS/SCSS",
      "Node",
      "Express",
      "MongoDB",
      "JWT",
      "Mongoose",
    ],
    github: "https://github.com/rpashev/angular-movie-app/#readme",
    live: "https://www.movies-app.live/",
    img: img3,
    rest: "https://github.com/rpashev/rest-movie-apps",
  },
  {
    title: "Movie app with React",
    description:
      "A responsive single page application allowing registered users to search for movies using an external API and organize the movies in userlists. This was my first full-stack application built with the MERN stack and it was a challenging experience integrating the external API with the app.",
    techstack: [
      "React",
      "Context API",
      "OMDB API",
      "SASS/SCSS",
      "Node",
      "Express",
      "MongoDB",
      "JWT",
      "Mongoose",
    ],
    github: "https://github.com/rpashev/react-movie-app-mern/#readme",
    live: "https://www.my-movies.live/",
    img: img4,
    rest: "https://github.com/rpashev/rest-movie-apps",
  },
];
