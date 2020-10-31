<template>
<div>
    <button @click="increment">+</button>
    {{ count }}
    <button @click="decrement">-</button>
</div>
</template>

<script>
import {
    ref
} from "vue";
export default {
    setup() {
        const count = ref(0);
        const increment = () => {
            count.value++;
        };
        const decrement = () => {
            count.value--;
        };
        return {
            count,
            increment,
            decrement,
        };
    },
};
</script>
