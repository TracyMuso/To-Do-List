import Storage from './store.js';

class UI {
  static displayTasks() {
    const container = document.querySelector('#list-items');
    container.innerHTML = '';
    const listItems = Storage.getList();
    listItems.forEach((todo) => {
      const listCont = document.createElement('div');
      listCont.className = 'single-task';
      listCont.setAttribute('data-index', todo.index);
      listCont.innerHTML = `
      <label for"id"></label>
      <input id="id" class="input" type="checkbox">
         <span class="span" contenteditable="true">${todo.description}</span>
          <div class="options">
           <i class="bi bi-three-dots-vertical"></i>
           <i class="bi bi-trash">delete</i>
         </div>
      `;

      document.querySelectorAll('.input').forEach((checked, i) => {
        const taskName = checked.nextElementSibling;
        checked.addEventListener('change', () => {
          const listItems = Storage.getList();
          taskName.classList.toggle('checked');
          const checkbox = document.querySelectorAll('.input');
          listItems[i].completed = checkbox[i].checked;
          localStorage.setItem('listItems', JSON.stringify(listItems));
        });
      });

      document.querySelectorAll('.span').forEach((edit, i) => {
        edit.addEventListener('input', () => {
          const listItems = Storage.getList();
          const span = document.querySelectorAll('.span');
          listItems[i].description = span[i].innerHTML;
          localStorage.setItem('listItems', JSON.stringify(listItems));
        });
      });
      container.appendChild(listCont);
    });
  }
}

export default UI;
