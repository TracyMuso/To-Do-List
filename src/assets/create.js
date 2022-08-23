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
      const label = document.createElement('label');
      label.setAttribute('for', 'id1');
      const inputcheck = document.createElement('input');
      inputcheck.setAttribute('class', 'check');
      inputcheck.setAttribute('type', 'checkbox');
      inputcheck.setAttribute('id', 'id1');
      inputcheck.setAttribute('autocomplete', 'on');
      inputcheck.checked = todo.completed;
      const spanText = document.createElement('span');
      spanText.setAttribute('class', 'name');
      spanText.setAttribute('contenteditable', 'true');
      const text = document.createTextNode(todo.description);
      spanText.appendChild(text);
      const divOp = document.createElement('div');
      divOp.setAttribute('class', 'options');
      const dots = document.createElement('i');
      dots.setAttribute('class', 'bi bi-three-dots-vertical');
      const trash = document.createElement('i');
      trash.setAttribute('class', 'bi bi-trash');
      trash.innerText = 'delete';
      divOp.append(dots, trash);
      listCont.append(label, inputcheck, spanText, divOp);
      container.appendChild(listCont);
    });
  }
}

export default UI;
