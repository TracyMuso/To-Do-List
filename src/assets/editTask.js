/* eslint-disable import/prefer-default-export */
import Storage from "./store.js";

const EditTask = (task) => {
  const container = document.querySelector('#list-items');
  container.addEventListener('input', (e) => {
    if (e.target.classList.contains('span')) {
      alert('you are editing!');
    }
  });
};

export { EditTask };