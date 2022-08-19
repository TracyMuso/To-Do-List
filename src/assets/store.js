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
  listItems.forEach((task, i) => {
    if (id === task.index) {
      listItems.splice(i, 1);
    }
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static updateIndex = () => {
  const listItems = this.getList();
  listItems.forEach((element, i) => {
    listItems[i].index = i + 1;
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

// static updateList = (obj, index, value, targetFiled) => {
//   // edit-input
//   obj.forEach((objs) => {
//     if (objs.index === parseInt(index, 10)) {
//       objs[targetFiled] = value;
//     }
//   });
// }
}

export default Storage;
