import './style.css';
import List from './assets/obj.js';
import UI from './assets/create.js';
import Storage from './assets/store.js';
import refreshIcon from './assets/Refresh_icon.png';

const myIcon = new Image();
myIcon.src = refreshIcon;

const clearBtn = document.querySelector('#clear');
const empty = document.querySelector('#empty');

const listItems = [];
if (listItems.length > 0) {
  clearBtn.classList.add('active');
  empty.innerHTML = '';
} else {
  clearBtn.classList.remove('active');
  empty.innerHTML = 'No tasks for today';
}

const addBtn = document.querySelector('.insert');

const container = document.querySelector('#list-items');
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-trash')) {
    // eslint-disable-next-line max-len
    Storage.deleteTask(Number(e.target.parentElement.parentElement.parentElement.parentElement.dataset.index));
    UI.displayTasks();
    Storage.UpdateIndex();
  }
});

container.addEventListener('blur', (e) => {
  // eslint-disable-next-line max-len
  const listItems = Storage.getList();
  if (e.target.classList.contains('span')) {
    Storage.getList(Number(e.target.parentElement.parentElement.dataset.index));
  }
  localStorage.setItem('listItems', JSON.stringify(listItems));
});

addBtn.addEventListener('click', () => {
  const listItems = Storage.getList();
  const input = document.querySelector('#add-new');
  const task = new List(input.value, listItems.length + 1);
  Storage.addTasks(task);
  UI.displayTasks();
  input.value = '';
});

const input = document.querySelector('#add-new');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const listItems = Storage.getList();
    const input = document.querySelector('#add-new');
    if (input.value !== '') {
      const task = new List(input.value, listItems.length + 1);
      Storage.addTasks(task);
      UI.displayTasks();
      input.value = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', UI.displayTasks());
