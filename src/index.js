import Post from './Post';
import './styles/main.css';
import json from './assets/json.json';
import WebpackLogo from './assets/webpack.png';
import XML from './assets/xml.xml';
import CSV from './assets/csv.csv';

const post = new Post('Webpack post title', WebpackLogo);

console.log('Post to string: ', post.toString());
console.log('JSON: ', json);
console.log('XML: ', XML);
console.log('CSV: ', CSV);
