import { defineStore } from "pinia"
const useCesiumStore = defineStore('cesiumInfo', {
    state: () => {
        return {
            viewer: 0,
            handler: null,
        }
    }
    ,
    actions: {
        setCesiumViewer(cesiumViewer) {
            this.viewer = cesiumViewer
        },
        setCesiumHandler(cesiumHandler) {
            this.handler = cesiumHandler
        }
    }
})

export default useCesiumStore