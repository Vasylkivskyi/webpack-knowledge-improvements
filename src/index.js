import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/main.scss';
import json from './assets/json.json';
import WebpackLogo from './assets/webpack.png';
import XML from './assets/xml.xml';
import CSV from './assets/csv.csv';
import './babel.js';
const post = new Post('Webpack post title', WebpackLogo);

$('#json').html(
  `<div class="json">
     <div class="json-title">
       Showing JSON using JQuery
     </div>
     <pre>${post.toString()}</pre>
   </>`,
);
console.log('Post to string: ', post.toString());
console.log('JSON: ', json);
console.log('XML: ', XML);
console.log('CSV: ', CSV);
