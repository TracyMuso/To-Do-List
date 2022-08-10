export default class Storage {
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
}