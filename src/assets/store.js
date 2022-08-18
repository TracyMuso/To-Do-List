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

// static checkLength = () => {
//   const listItems = this.getList();
//   const empty = document.querySelector('#empty');
//   if (listItems.length === 0) {
//     empty.innerHTML = 'No Tasks for today';
//   } else {
//     empty.innerHTML = '';
//   }
//   if (listItems.length === 0) {
//     empty.innerHTML = 'No tasks for today';
//   } else {
//     empty.innerHTML = '';
//   }
// }

static addToList = (task) => {
  const listItems = this.getList();
  listItems.push(task);
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static deleteTask = (deleteId) => {
  const listItems = this.getList();
  listItems.splice(deleteId, 1);
  listItems.forEach((element, i) => {
    listItems[i].index = i + 1;
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
  window.location.reload();
}

static updateIndex = () => {
  const listItems = this.getList();
  listItems.forEach((element, i) => {
    listItems[i].index = i + 1;
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}
}

export default Storage;
