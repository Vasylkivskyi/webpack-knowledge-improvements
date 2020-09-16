import Post from './Post';
import './styles/main.css';
import json from './assets/json.json';

const post = new Post('Webpack post title');

console.log('Post to string: ', post.toString());
console.log(json);
