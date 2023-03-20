<template>
    <div class="container">
        <div class="congtent">
            this is home page
        </div>
        <button @click="toChildOne">to childOne</button>
        <button @click="toChildTwo">to childTwo</button>
        <van-popup v-model="show">内容</van-popup>
    </div>
</template>

<script>
import { Toast, Popup } from 'vant';

export default {
    components: { Toast, [Popup.name]: Popup },
    data() {
        return {
            show: false
        }
    },
    methods: {
        toChildOne() {
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
                loadingType: 'spinner'
            });

            return
            this.$router.push({
                path: '/home/childOne'
            })
        },
        toChildTwo() {
            this.show = true
            return
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