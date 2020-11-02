<template>
<img alt="Vue logo" src="./assets/logo.png" />
<HelloWorld msg="Welcome to Your Vue.js App" />
<!-- <CounterWithVuex /> -->
<!--<CityAddRemove />-->
<!--<ComputedTwoNum />-->
<!--<Counter />-->
<!--<PostComments />-->
<TodoWithRef />
</template>

<script>
import HelloWorld from "./components/HelloWorld";
// import ComputedTwoNum from "./components/ComputedTwoNum";
//import PostComments from "./components/PostComments";
//import CityAddRemove from "./components/CityAddRemove";
// import Counter from "./components/Counter";
//import CounterWithVuex from "./components/CounterWithVuex";
import TodoWithRef from "./components/TodoWithRef";

export default {
    name: "App",
    components: {
        HelloWorld,
        // ComputedTwoNum,
        // PostComments,
        // CityAddRemove,
        //Counter,
        // CounterWithVuex,
        TodoWithRef,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
