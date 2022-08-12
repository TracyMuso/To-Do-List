import Storage from './store.js';

class UI {
  static displayTasks() {
    const container = document.querySelector('#list-items');
    container.innerHTML = '';
    const listItems = Storage.getItems();
    listItems.forEach((task) => {
      const listCont = document.createElement('div');
      listCont.className = 'single-task';
      listCont.setAttribute('data-index', task.index);
      listCont.innerHTML = `
      <label for"id1"></label>
      <input type="checkbox" id="id1"></input>
         <span class="span" contenteditable="true">${task.description}</span>
          <div class="options">
           <i class="bi bi-three-dots-vertical"></i>
           <ul class="menu">
           <li><i class="bi bi-trash">delete</i></li>
           </ul>
         </div>
      `;
      container.appendChild(listCont);
    });
  }
}

export default UI;
