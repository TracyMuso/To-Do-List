class Task {
  constructor(description) {
    this.description = description;
    this.index = Math.random();
    this.completed = true;
  }
}

export default Task;