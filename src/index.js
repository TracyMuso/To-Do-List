import './style.css';
import List from './assets/obj.js';
import UI from './assets/create.js';
import Storage from './assets/store.js';
import refreshIcon from './assets/Refresh_icon.png';
import { LibManifestPlugin } from 'webpack';

const myIcon = new Image();
myIcon.src = refreshIcon;

const clearBtn = document.querySelector('#clear');
const empty = document.querySelector('#empty');

// const listItems = [];
// if (listItems.length > 0) {
//   clearBtn.classList.add('active');
//   empty.innerHTML = '';
// } else {
//   clearBtn.classList.remove('active');
//   empty.innerHTML = 'No tasks for today';
// }

const addBtn = document.querySelector('.insert');

document.querySelectorAll('.span').forEach((text, i) => {
  text.addEventListener('blur', () => {
    const listItems = Storage.getList();
    const edited = document.querySelectorAll('#span');
    listItems[i].completed = checked[i].checked;
    localStorage.setItem('listItems', JSON.stringify(listItems));
  });
});

// container.addEventListener('blur', (e) => {
//   const listItems = Storage.getList();
//   if (e.target.classList.contains('span')) {
//     Storage.getList(e.target);
//   }
//   localStorage.setItem('listItems', JSON.stringify(listItems));
// });

addBtn.addEventListener('click', () => {
  const listItems = Storage.getList();
  const input = document.querySelector('#add-new');
  const listIndex = listItems.length + 1;
  const task = new List(input.value, listIndex);
  Storage.addToList(task);
  UI.displayTasks();
  input.value = '';
});

const input = document.querySelector('#add-new');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const listItems = Storage.getList();
    const input = document.querySelector('#add-new');
    if (input.value !== '') {
      const listIndex = listItems.length + 1;
      console.log(listIndex);
      const task = new List(input.value, listIndex);
      Storage.addToList(task);
      UI.displayTasks();
      input.value = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', UI.displayTasks());
