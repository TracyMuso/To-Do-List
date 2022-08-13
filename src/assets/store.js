class Storage {
  static addTasks(task) {
    const listItems = this.getList();
    listItems.push(task);
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }

  static getList() {
    let listItems;
    if (localStorage.getItem('listItems')) {
      listItems = JSON.parse(localStorage.getItem('listItems'));
    } else {
      listItems = [];
    }
    return listItems;
  }

  static deleteTask(el) {
    const listItems = this.getList();
    listItems.forEach((task, i) => {
      if (el === task.index) {
        listItems.splice(i, 1);
      }
    });
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }

  static UpdateIndex() {
    const listItems = this.getList();
    listItems.forEach((task, i) => {
      listItems[i].index = i + 1;
    });
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }
}

export default Storage;
