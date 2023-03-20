<template>
    <div class="container">
        <div class="congtent">
            this is home page
        </div>
        <button @click="toChildOne">to childOne</button>
        <button @click="toChildTwo">to childTwo</button>
    </div>
</template>

<script>
import { Toast } from 'vant';

export default {
    components: { Toast },
    methods: {
        toChildOne() {
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
            });
            return
            this.$router.push({
                path: '/home/childOne'
            })
        },
        toChildTwo() {
            this.$router.push({
                path: '/home/childTwo'
            })
        }
    }
}
</script>

<style>
button {
    border: 1px solid red;
}

.container {
    padding-top: 80px;
}
</style>