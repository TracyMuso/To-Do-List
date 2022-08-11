import './style.css';
import UI from './assets/create.js';
import refreshIcon from './assets/Refresh_icon.png';

const myIcon = new Image();
myIcon.src = refreshIcon;

const inputField = document.querySelector('#add-new');
const addBtn = document.querySelector('#plus');
inputField.onkeyup = () => {
  const userData = inputField.value;
  if (userData.trim() !== 0) {
    addBtn.classList.add('active');
  }
  addBtn.classList.remove('active');
};
window.onload = UI.displayTasks();
