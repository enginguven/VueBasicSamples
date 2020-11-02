<template>
<h2>TODO App</h2>
<form>
    <label v-if="error" style="color: red">Please input TODO</label><br />
    <label>Input TODO:</label>
    <input type="text" v-model="todocontent" />
    <button @click="AddTodo">Add New Todo</button>
</form>
<ul>
    <li v-for="(todo, idx) in todos" :key="idx" v-show="todo.showComplete">
        <p :class="{ done: todo.done }">
            <input type="checkbox" v-model="todo.done" />{{ todo.content }}
            <button @click="removeTodo(todo.id)">Remove Todo</button>
        </p>
    </li>
</ul>
<div v-if="todos.filter((p) => p.done).length >= 1">
    <input type="checkbox" @click="showDoneTodos" />Show Only Dones
</div>

<button @click="removeDoneTodos">Remove Done Todos</button>
<button @click="removeAll">Remove All</button>
</template>

<script>
import {
    ref
} from "vue";
import {
    v4 as uuid_v4
} from "uuid";

export default {
    name: "TodoWithRef",
    setup() {
        const todocontent = ref("");
        const todos = ref([]);
        const error = ref("");

        const AddTodo = (e) => {
            e.preventDefault();
            if (todocontent.value.length == 0) {
                error.value = true;
                return;
            }

            todos.value = [
                ...todos.value,
                {
                    id: uuid_v4(),
                    done: false,
                    content: todocontent.value,
                    showComplete: true,
                },
            ];
            todocontent.value = "";
            error.value = false;
        };

        const removeTodo = (id) => {
            todos.value = todos.value.filter((todo) => todo.id != id);
        };

        const removeAll = () => {
            todos.value = [];
        };
        const showDoneTodos = (e) => {
            todos.value = todos.value.map((todo) => ({
                ...todo,
                showComplete: e.target.checked ? todo.done : true,
            }));
        };
        const removeDoneTodos = () => {
            todos.value = todos.value.filter((t) => t.done === false);
        };
        return {
            todocontent,
            AddTodo,
            todos,
            removeTodo,
            error,
            removeAll,
            removeDoneTodos,
            showDoneTodos,
        };
    },
};
</script>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
