class TodoList {
  constructor() {
    this.allItems = [];
  }

  addItem(todoItem) {
    this.allItems.push(todoItem);
  }

  markAsComplete(index) {
    this.allItems[index].completed = true;
  }

  getOverdueItems() {
    const today = new Date().toISOString().split("T")[0];
    return this.allItems.filter((item) => !item.completed && item.dueDate < today);
  }

  getItemsDueToday() {
    const today = new Date().toISOString().split("T")[0];
    return this.allItems.filter((item) => item.dueDate === today);
  }

  getItemsDueLater() {
    const today = new Date().toISOString().split("T")[0];
    return this.allItems.filter((item) => !item.completed && item.dueDate > today);
  }

  getDisplayableList(list) {
    const today = new Date().toISOString().split("T")[0];
    return list
      .map((item, index) => {
        const dueText = item.dueDate
          ? item.dueDate === today
            ? ""
            : ` <span class="math-inline">\{item.dueDate\}` // Fixed missing backslash
          : "";
        const completionStatus = item.completed ? "[x]" : "[ ]"; // Removed extra backslashes
        return `</span>${completionStatus} <span class="math-inline">${item.title}</span>${dueText}`; // Fixed template literal
      })
      .join("\n");
  }
}

module.exports = TodoList;
