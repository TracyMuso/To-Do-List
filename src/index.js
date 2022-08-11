import './style.css';
import List from './assets/obj.js';
import UI from './assets/create.js';
import Storage from './assets/store.js';
import refreshIcon from './assets/Refresh_icon.png';

const myIcon = new Image();
myIcon.src = refreshIcon;

const clearBtn = document.querySelector('#clear');
const empty = document.querySelector('#empty');

const toDoList = [];
if (toDoList.length > 0) {
  clearBtn.classList.add('active');
  empty.innerHTML = '';
} else {
  clearBtn.classList.remove('active');
  empty.innerHTML = 'No tasks for today';
}

const inputField = document.querySelector('#add-new');
let userData = inputField.value;
const addsNew = document.querySelector('#new-item');
const addBtn = document.querySelector('#plus');

inputField.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (userData.trim() != 0) {
    addBtn.classList.add('active');
  }
  addBtn.classList.remove('active');
});

addsNew.addEventListener('click', (e) => {
  const isBtn = e.target.tagName.contains('button');
  isBtn.onclick = (
  alert('i have been clicked')
  );
  userData = inputField;
  UI.displayTasks(userData);
  userData = '';
});

// window.onload = UI.displayTasks();
