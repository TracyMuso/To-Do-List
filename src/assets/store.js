class Storage {
static getList = () => {
  let listItems;
  if (localStorage.getItem('listItems')) {
    listItems = JSON.parse(localStorage.getItem('listItems'));
  } else {
    listItems = [];
  }
  return listItems;
}

static addToList = (task) => {
  const listItems = this.getList();
  listItems.push(task);
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static deleteTask = (id) => {
  const listItems = this.getList();
  listItems.forEach((todo, i) => {
    if (id === todo.index) {
      listItems.splice(i, 1);
    }
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static editTask = (id) => {
  const listItems = this.getList();
  listItems.forEach((todo, i) => {
    const span = document.querySelectorAll('span');
    if (id === todo.index) {
      listItems[i].description = span[i].innerHTML;
    }
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static checkTask = (id) => {
  const listItems = this.getList();
  listItems.forEach((todo, i) => {
    const checkbox = document.querySelectorAll('.check');
    if (id === todo.index) {
      listItems[i].completed = checkbox[i].checked;
    }
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static updateIndex = () => {
  const listItems = this.getList();
  listItems.forEach((todo, i) => {
    listItems[i].index = i + 1;
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static updateList = () => {
  const listItems = this.getList();
  listItems.forEach((todo, i) => {
    const Wrapper = document.querySelectorAll('.single-task');
    Wrapper[i].setAttribute('data-index', todo.index);
  });
}
}

export default Storage;
