# React-Netflixx

### Custom Font Setup

- Add Font file - Assets/Fonts/font files
- Add font-faces in index.css file
- initilise font property in tailwind config file like, this
  `extend: {
    fontFamily: {
    "nsans-light": ["Nsans Light"],
"nsans-medium": ["Nsans Medium"]
}
}`

## Securing API key

- create .env file at root level

- const VITE_IMDB_KEY = "kjbfdkbkbfdsk"; for VITE, VITE prefix is must = VITE_IMDB_KEY
- within service.js file, const key = import.meta.env.VITE_TMDB_KEY;
- add .env file to .gitignore
