import UI from './create.js';

class Storage {
  constructor() {
    this.task = 'task';
  }

  preserve(list) {
    const listItems = this.getItems();
    this.task.push(list);
    listItems[list.index] = list;
    localStorage.setItem(this.task, JSON.stringify(listItems));
    localStorage.setItem('books', JSON.stringify(this.collection));
  }

  getItems() {
    if (localStorage.getItem(this.task)) {
      localStorage.parse(localStorage.getItem(this.task));
    } return {};
  }

  updateList = (lists) => {
    localStorage.setItem(this.task, JSON.stringify(lists));
  }
}

export default Storage;
