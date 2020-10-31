<template>
<h1>Add/Remove City</h1>
<ul>
    <li v-for="city in cities" v-bind:key="city">
        {{ city }}
        <button @click="removeCity(city)">X</button>
    </li>
</ul>
<input type="text" v-model="city" />
<button @click="
      addCity(city);
      city = '';
    ">
    Add City
</button>
</template>

<script>
import {
    ref
} from "vue";
import useCityAddRemove from "./useCityAddRemove";
export default {
    setup() {
        const city = ref("");
        const {
            cities,
            addCity,
            removeCity
        } = useCityAddRemove;
        console.log(useCityAddRemove);
        return {
            cities,
            addCity,
            removeCity,
            city,
        };
    },
};
</script>
