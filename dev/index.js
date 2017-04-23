require('normalize.css/normalize.css');
require('./styles.scss');
var events = require('./app.js');
import $ from 'jquery';

$( window ).ready(events.onWidthChange);
$( window ).resize(events.onWidthChange);
$("li.event, li.pevent").hover(events.onEventHoverOn,events.onEventHoverOut);
