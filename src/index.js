import './style.css';
import UI from './assets/create.js';
import refreshIcon from './assets/Refresh_icon.png';

const myIcon = new Image();
myIcon.src = refreshIcon;

window.onload = UI.displayTasks();
