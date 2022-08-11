class Storage {
  constructor() {
    this.task = 'task';
  }

  preserve = (list) => {
    const listItems = this.getItems();
    if (listItems[list.index] === list) {
      localStorage.setItem(this.task, JSON.stringify(listItems));
    }
  }

  getItems = () => {
    if (localStorage.getItem(this.task)) {
      localStorage.parse(localStorage.getItem(this.task));
    } return {};
  }

  updateList = (lists) => {
    localStorage.setItem(this.task, JSON.stringify(lists));
  }
}

export default Storage;
