<template>
<h1>Post</h1>
<div v-for="post in posts" :key="post.id" @click="activePostId = post.id">
    <article>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <p>
            <button @click="getComments(post.id)">Get Post</button>
            <br />
        </p>
        <div v-for="comment in comments" :key="comment.id" v-show="post.id == activePostId">
            <article>
                <h2 style="color: Red">{{ comment.name }}</h2>
                <p>{{ comment.body }}</p>
            </article>
        </div>

        <p></p>
    </article>
</div>
</template>

<script>
import {
    onMounted,
    ref
} from "vue";
import axios from "axios";
export default {
    setup() {
        const posts = ref([]);
        const comments = ref([]);
        const activePostId = ref(0);

        onMounted(async () => {
            console.log("mounted");

            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            posts.value = await response.data;
        });

        const getComments = async (postId) => {
            //activePostId.value = postId;

            console.log(postId);
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
            );

            comments.value = await response.data;
            console.log(comments.value);
        };
        return {
            posts,
            getComments,
            comments,
            activePostId,
        };
    },
};
</script>
