import Storage from './store.js';

class UI {
  static displayTasks() {
    const container = document.querySelector('#list-items');
    container.innerHTML = '';
    const listItems = Storage.getList();
    listItems.forEach((task, id) => {
      const listCont = document.createElement('div');
      listCont.className = 'single-task';
      listCont.id = `${id}`;
      listCont.innerHTML = `
      <label for"id">
      <input id="id"class="input" type="checkbox">
         <span contenteditable="true">${task.description}</span>
         </label>
          <div class="options">
          <span class="delete">delete</span>
         </div>
      `;
      const deletebtn = document.querySelectorAll('.delete');
      deletebtn.forEach((item) => {
        item.addEventListener('click', (e) => {
          const listId = e.target.parentElement.parentElement.id;
          Storage.deleteTask(listId);
          // Storage.UpdateIndex();
        });
      });
      // <i class="bi bi-three-dots-vertical"></i>
      // <i class="bi bi-trash>delete</i>
      container.appendChild(listCont);
    });
  }
}

export default UI;
