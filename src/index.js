import './style.css';
import UI from './assets/create.js';
import Storage from './assets/store.js';

class List {
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.completed = false;
  }
}

const container = document.querySelector('#list-items');
const addBtn = document.querySelector('.insert');

// Add to list
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
      const task = new List(input.value, listIndex);
      Storage.addToList(task);
      UI.displayTasks();
      input.value = '';
    }
  }
});

// Delete from the list
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-trash')) {
    Storage.deleteTask(Number(e.target.parentElement.parentElement.dataset.index));
    UI.displayTasks();
    Storage.updateIndex();
    Storage.updateList();
  }
});

// edit task
container.addEventListener('input', (e) => {
  if (e.target.classList.contains('name')) {
    Storage.editTask(Number(e.target.parentElement.dataset.index));
  }
});

// checkbox
container.addEventListener('change', (e) => {
  if (e.target.classList.contains('check')) {
    Storage.checkTask(Number(e.target.parentElement.dataset.index));
  }
});

// Clear all completed
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  let listItems = Storage.getList();
  listItems = listItems.filter((todo) => !todo.completed);
  localStorage.setItem('listItems', JSON.stringify(listItems));
  UI.displayTasks();
});

document.addEventListener('DOMContentLoaded', UI.displayTasks(), Storage.updateIndex());
