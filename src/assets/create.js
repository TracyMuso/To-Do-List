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
    const clearBtn = document.querySelector('#clear');
    const empty = document.querySelector('#empty');

    if (toDoList.length > 0) {
      clearBtn.classList.add('active');
    } else {
      clearBtn.classList.remove('active');
      empty.innerHTML = 'No tasks for today';
    }

    const container = document.querySelector('#list-items');
    container.innerHTML = '';
    const toDo = toDoList;
    toDo.forEach((list) => {
      const listCont = document.createElement('div');
      listCont.className = 'single-task';
      listCont.innerHTML = `
         <label for"id1">${list.description}</label>
          <input type="checkbox" id="id1"></input>
         <div class="options">
            <i class="bi bi-three-dots-vertical"></i>
           <ul class="menu">
           <li><i class="bi bi-pen">edit</i></li>
           <li><i class="bi bi-pencil">delete</i></li>
           </ul>
         </div>
      `;
      container.appendChild(listCont);
    });
  }
}

export default UI;