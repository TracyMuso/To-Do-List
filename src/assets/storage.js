class Store {
  constructor() {
    this.description = 'to_do_list';
  }

  preserve(list) {
    const taskList = this.getAll();
    taskList[list.index] = list;
    localStorage.setItem(this.description, JSON.stringify(taskList));
  }

  update(lists) {
    localStorage.setItem(this.description, JSON.stringify(lists));
  }

  getAll() {
    if (localStorage.setItem(this.description)) {
      return JSON.parse(localStorage.getItem(this.description));
    }
    return [];
  }

  checkLength() {
    const empty = document.querySelector('#empty');
    if (this.description.length === 0) {
      empty.innerHTML = 'No tasks for today';
    } else {
      empty.innerHTML = '';
    }
  }

  removeBook(index) {
    this.description = this.des.filter((list) => list.index !== index);
    localStorage.setItem('books', JSON.stringify(this.description));
    UI.DisplayTasks(this.description);
    this.checkLength();
  }
}

export default Store;