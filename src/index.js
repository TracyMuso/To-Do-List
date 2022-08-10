import _ from 'lodash';
import './style.css';

const container = document.querySelector('#list-items');
const addTask = document.querySelector('#plus');
const toDo = document.createElement('input');
toDo.setAttribute('type', 'checkbox');
toDo.classList.add('task');

const task = [
  {
    description: 'string',
  },
  {
    completed: true,
  },
  {
    index: Number,
  },
];

