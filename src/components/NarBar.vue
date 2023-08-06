<template></template>

<script setup>
import { onMounted, ref } from 'vue'

// 导入数据
import { useCesiumStore } from '@/store/'
const cesiumStore = useCesiumStore()

let viewer
let initViewer = () => {
    viewer = cesiumStore.viewer

    console.log(viewer);
}

onMounted(() => {
    initViewer()
})

</script>

<style lang="scss" scoped></style>