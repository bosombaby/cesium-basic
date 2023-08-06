<template>
    <div id="cesiumContainer"></div>
</template>

<script setup>
import * as Cesium from 'cesium'
import { onMounted, ref, reactive, markRaw, watch } from 'vue'

let viewer
let initViewer = () => {
    // token令牌
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NmY4OGRkZS03ZTljLTQ5MDMtYmUwZC0wNmM2ZjdmM2M1MzMiLCJpZCI6MTI2MjUzLCJpYXQiOjE2NzczMTI2ODJ9.KO5KCez-xGcJBJfY8XYWAlUXHO4WWrZUm6tCZ1MfCWM'

    viewer = new Cesium.Viewer('cesiumContainer', {

        // geocoder: false, // 隐藏查找位置
        // homeButton: false, // 隐藏返回视角到初始位置
        // sceneModePicker: false, // 隐藏视角模式的选择
        // baseLayerPicker: false, // 隐藏图层选择器
        // navigationHelpButton: false, // 隐藏帮助
        // animation: false, // 隐藏动画速度控制器
        // timeline: false, // 隐藏时间轴
        // fullscreenButton: false, // 隐藏全屏按钮
        // shouldAnimate: true,
        // selectionIndicator: false,//双击选中实体
        // sceneModePicker: false,
        // skyBox: false,
        // sceneMode: Cesium.SceneMode.SCENE2D,//切换2D

        // imageryProvider: new Cesium.OpenStreetMapImageryProvider({
        //     url: 'https://a.tile.openstreetmap.org/'
        // })
    })

    // 是否支持图像渲染像素化处理
    if (Cesium.FeatureDetection.supportsImageRenderingPixelated()) {
        viewer.resolutionScale = window.devicePixelRatio
    }
    if (!viewer.scene.msaaSupported) {
        window.alert("This browser does not support MSAA.");
    }
    // 开启抗锯齿
    // viewer.scene.postProcessStages.fxaa.enabled = true
    viewer.scene.msaaSamples = 4

    // 开启深度监测
    viewer.scene.globe.depthTestAgainstTerrain = true

    viewer.scene.debugShowFramesPerSecond = true

    // viewer.imageryLayers.addImageryProvider(xinludaiImagery)
    // 隐藏版权信息
    viewer._cesiumWidget._creditContainer.style.display = "none"

    // 监视器
    // viewer.extend(Cesium.viewerCesium3DTilesInspectorMixin)
    // DirectionalLight 表示 从无限远的地方向单一方向发射的光。
    viewer.scene.light = new Cesium.DirectionalLight({
        direction: new Cesium.Cartesian3(0.354925, -0.890918, -0.283358)
    })
    // 地图切换成二维的，方向正北
    // viewer.scene.mode = Cesium.SceneMode.SCENE2D
}


// 相机定位的问题
let setCameraPos = () => {
    viewer.camera.setView({
        destination: new Cesium.Cartesian3(-2556423.687339962, 4558058.667541492, 3645710.7828753917),
        orientation: {
            heading: 5.95,
            pitch: -1.54,
            roll: 0
        },
    })
}

onMounted(() => {
    initViewer()
    setCameraPos()

})

</script>

<style lang="scss" scoped>
#cesiumContainer {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>