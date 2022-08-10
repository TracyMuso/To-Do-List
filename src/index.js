import './style.css';
import UI from './assets/create.js';
import refreshIcon from './assets/Refresh_icon.png';

const myIcon = new Image();
myIcon.src = refreshIcon;

const inputBox = document.querySelector('#add-new');
const addBtn = document.querySelector('#plus');
inputBox.onkeyup = () => {
  const newData = inputBox.value;
  if (newData.trim() !== 0) {
    addBtn.classList.add('active');
  } else {
    addBtn.classList.remove('active');
  }
};

window.onload = UI.displayTasks();
