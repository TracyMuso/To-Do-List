import Storage from './store.js';

const EditTask = (task) => {
  const container = document.querySelector('#list-items');
  container.addEventListener('input', (e) => {
    if (e.target.classList.contains('span')) {
      localStorage.setItem('listItems', JSON.stringify(task));
    }
  });
};

const fulfilledTask = () => {
  const container = document.querySelector('#list-items');
  container.addEventListener('input', (e) => {
    if (e.target.classList.contains('span')) {
      Storage.savaToStorage();
    }
  });
};

export { EditTask };
export { fulfilledTask };