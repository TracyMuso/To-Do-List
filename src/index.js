import './style.css';
import List from './assets/obj.js';
import UI from './assets/create.js';
import Storage from './assets/store.js';
import refreshIcon from './assets/Refresh_icon.png';

const myIcon = new Image();
myIcon.src = refreshIcon;

const inputField = document.querySelector('#add-new');
const addBtn = document.querySelector('#plus');
inputField.addEventListener('keyup', () => {
  const userData = inputField.value.trim();
  if (userData.trim() !== 0) {
    addBtn.classList.add('active');
  }
  addBtn.classList.remove('active');
});

addBtn.addEventListener('click', () => {
  const userData = inputField.value;
 UI.getItems();
 UI.preserve();
});

window.onload = UI.displayTasks();
