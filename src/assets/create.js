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
      const listCont = document.createElement('div');
      listCont.className = 'single-task';
      const label = document.createElement('label');
      label.setAttribute('for', 'id1');
      label.innerHTML = list.description;
      const toDo = document.createElement('input');
      toDo.setAttribute('type', 'checkbox');
      toDo.id = 'id1';
      const dots = document.createElement('i');
      dots.className = 'bi bi-three-dots-vertical';
      listCont.append(toDo, label, dots);
      container.appendChild(listCont);
    });
  }
}

export default UI;