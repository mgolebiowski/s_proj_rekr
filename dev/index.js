require('normalize.css/normalize.css');
require('./styles.scss');
var onWidthChange = require('./app.js');
import $ from 'jquery';

$( window ).ready(onWidthChange);
$( window ).resize(onWidthChange);
