class List {
  constructor(task) {
    this.task = task;
    this.index = Math.random();
    this.completed = false;
  }
}

export default List;