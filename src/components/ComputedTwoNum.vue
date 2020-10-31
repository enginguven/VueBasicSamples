<template>
Number1:<input type="number" v-model="num1" /><br />
Number2:<input type="number" v-model="num2" /><br />
Sum:{{ sum }}
</template>

<script>
import {
    computed,
    ref
} from "vue";
export default {
    setup() {
        const num1 = ref(0);
        const num2 = ref(0);
        const sum = computed(() => parseInt(num1.value) + parseInt(num2.value));
        return {
            num1,
            num2,
            sum,
        };
    },
};
</script>
