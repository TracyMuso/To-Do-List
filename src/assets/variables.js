const showTasks = () => {
  const listItems = JSON.parse(localStorage.getItem('listItems'));
  const container = document.querySelector('#list-items');
  container.innerHTML = '';
  if (listItems) {
    listItems.forEach((task, id) => {
      const isCompleted = listItems.completed === true ? false : '';
      const listCont = document.createElement('div');
      listCont.className = 'single-task';
      listCont.innerHTML = `
      <label for"${id}">
      <input class="input" onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
         <span onblur="editTask(${id}, '${task.description}')" class="${isCompleted}" contenteditable="true">${task.description}</span>
         </label>
          <div class="options">
           <i class="bi bi-three-dots-vertical"></i>
           <i class="bi bi-trash" onclick="deleteTask(${id})">delete</i>
         </div>
      `;
      container.appendChild(listCont);
      // container.innerHtml = listCont ||  <span id="empty"> No Tasks for today</span>
    });
  }
};

showTasks();

const listItems = JSON.parse(localStorage.getItem('listItems'));
const updateStatus = (selected) => {
  const taskName = selected.parentElement.lastElementChild;
  // const taskName = selected.nextElementSibling;
  if (selected.checked) {
    taskName.classList.toggle('checked');
    listItems[selected.id].completed = true;
  } else {
    taskName.classList.remove('checked');
    listItems[selected.id].completed = false;
  }
  localStorage.setItem('listItems', JSON.stringify(listItems));
};

const edit = (selctedtask) => {
  const taskMenu = selctedtask.parentElement.lastElementChild;
  taskMenu.classList.toggle('show');
  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'I' || e.target !== selctedtask) {
      taskMenu.classList.remove('show');
    }
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
};

const deleteTask = (deleteid) => {
  listItems.splice(deleteid, 1);
  listItems.forEach((element, i) => {
    listItems[i].index = i + 1;
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
  showTasks();
};

let editid;
let isEdited = true;

const taskInput = document.querySelector('#add-new');
taskInput.addEventListener('keyup', (e) => {
  const newTask = taskInput.value.trim();
  if (e.key === 'Enter' && newTask) {
    if (isEdited) {
      let listItems = JSON.parse(localStorage.getItem('listItems'));
      if (!listItems) {
        listItems = [];
      }
      const taskInfo = { description: newTask, index: listItems.length + 1, completed: false };
      listItems.push(taskInfo);
    } else {
      isEdited = false;
      listItems[editid].description = newTask;
    }
    showTasks();
    taskInput.value = '';
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }
});

const editTask = (taskid, taskname) => {
  taskInput.value = taskname;
};

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  let listItems = JSON.parse(localStorage.getItem('listItems'));
  listItems = listItems.filter((task) => !task.checked);
  localStorage.setItem('listItems', JSON.stringify(listItems));
  showTasks();
});