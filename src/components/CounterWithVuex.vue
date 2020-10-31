<template>
<div>
    <button @click="increment">+</button>
    {{ count }}
    <button @click="decrement">-</button>
</div>
</template>

<script>
import {
    computed
} from "vue";
import {
    useStore
} from "vuex";
export default {
    setup() {
        const store = useStore();
        const count = computed(() => store.state.count);

        const increment = () => {
            store.commit("increment");
        };
        const decrement = () => {
            store.commit("decrement");
        };
        return {
            count,
            increment,
            decrement,
        };
    },
};
</script>
