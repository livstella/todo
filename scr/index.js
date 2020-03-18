class toDo {
  constructor() {
    this._taskArray = [];
    this._doneArray = [];
  }
  addTask(task) {
    this._done = false;
    this._taskArray.push(task);
  }
  markDone(task) {
    this._done = true;
    this._doneArray.push(task);
  }
}

class done {
  constructor() {
    this._doneArray = [];
  }
}

var ourList = new toDo();

ourList.addTask("js");
ourList.addTask("write js");
ourList.addTask("js");
ourList.addTask("We are geniuses, especially Sami");
ourList.addTask("We are");

ourList.markDone(ourList._taskArray[0]);
ourList.markDone(ourList._taskArray[2]);
console.log(ourList._taskArray);
console.log(ourList._doneArray);
class toDo {
  constructor() {
    this._taskArray = [];
    this._done = false;
  }
  addTask(task) {
    this._taskArray.push(task);
  }
  markDone(array){
    this._done = true;
    this._taskDone.push(array);
      }
    }


class done {
  constructor() {
    this._doneArray = [];
  }
}

var ourList = new toDo();

ourList.addTask("write js");
console.log(ourList._taskArray);

ourList._taskArray.markDone()
