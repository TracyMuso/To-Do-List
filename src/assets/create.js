class UI {
  static displayTasks = () => {
    const toDoList = [
      {
        description: 'Wash car',
        index: 1,
        completed: true,
      },
      {
        description: 'Take dog for walk',
        index: 2,
        completed: false,
      },
    ];

    const toDo = toDoList;
    const container = document.querySelector('#list-items');
    container.innerHTML = '';
    toDo.forEach((list) => {
      const label = document.createElement('label');
      const listCont = document.createElement('div');
      listCont.className = 'single-task';
      label.setAttribute('for', 'id1');
      const toDo = document.createElement('input');
      toDo.setAttribute('type', 'checkbox');
      toDo.id = 'id1';
      const para = document.createElement('p');
      para.className = 'task';
      para.innerHTML = list.description;
      const dots = document.createElement('i');
      dots.className = 'bi bi-three-dots-vertical';
      container.appendChild(listCont);
      listCont.append(label, toDo, para, dots);
    });
  }
}

export default UI;