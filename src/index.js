import Post from './Post';
import './styles/main.css';
import json from './assets/json.json';
import WebpackLogo from './assets/webpack.jpg';

const post = new Post('Webpack post title', WebpackLogo);

console.log('Post to string: ', post.toString());
console.log(json);
