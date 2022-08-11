class UI {
  static displayTasks = () => {
    const toDoList = [];
    const clearBtn = document.querySelector('#clear');
    const empty = document.querySelector('#empty');

    if (toDoList.length > 0) {
      clearBtn.classList.add('active');
      empty.innerHTML = '';
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
      <input type="checkbox" id="id1"></input>
         <label for"id1">${list.value}</label>
          <div class="options">
           <i class="bi bi-three-dots-vertical"></i>
           <ul class="menu">
           <li><i class="bi bi-pencil">edit</i></li>
           <li><i class="bi bi-trash">delete</i></li>
           </ul>
         </div>
      `;
      container.appendChild(listCont);
    });
  }

  addToList = () => {
    
  }
}

export default UI;