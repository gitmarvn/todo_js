

let todoList = {
    todos: [],
    displayTodos: function(){
        if (this.todos.length === 0) {
            console.log("Your list is empty");
        } else {
            console.log('My Todos:')
            for (let i = 0; i < this.todos.length; i++) {
                if ( this.todos[i].completed ) {
                    console.log("(x)", this.todos[i].todoText);
                } else {
                    console.log("( )", this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleComplete: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        // Get number of completed todos
        for (let i = 0; i < totalTodos; i++ ) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        // If everything is true, make everything false
        if (completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
}

let handlers = {
    displayTodos: function(){
        todoList.displayTodos();
    },
    addTodo: function () {
        let addToDoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addToDoTextInput.value);
        addToDoTextInput.value = '';
    },
    changeTodo: function () {
        let changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        let changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function () {
        let deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
    },
    toggleCompleted: function () {
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleComplete(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
    },
    toggleAll: function(){
        todoList.toggleAll();
    }
};